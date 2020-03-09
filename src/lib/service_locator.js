'use strict'
/**********Dependency Graph*************/
var DependencyGraph = DependencyGraph || {}

/** Used to manage app dependencies, that would require dependency injection */
DependencyGraph.ServiceLocator = function ServiceLocator ()
{
    this.dependencyMap = {}
    this.dependencyCache = {} 
}

/**registers a new dependency**********************************************************************
 * @method register
 * @param dependencyName
 * @param constructor
 * @public
 ***************************************************************************************************/
DependencyGraph.ServiceLocator.prototype.register = function register (dependencyName, constructor)
{
  
    if (typeof constructor !== "function")
    {
        throw new Error(dependencyName + ': Dependency constructor is not a function');
    }
  
    if (!dependencyName) {
      throw new Error('Invalid depdendency name provided');
    }
    
    this.dependencyMap[dependencyName] = constructor
}

DependencyGraph.ServiceLocator.prototype.get = function (dependencyName) 
{
    if (this.dependencyMap[dependencyName] === undefined) {
        throw new Error(dependencyName + ': Attempting to retrieve unknown dependency');
    }

    if (typeof this.dependencyMap[dependencyName] !== 'function') {
        throw new Error(dependencyName + ': Dependency constructor is not a function');
    }

    if (this.dependencyCache[dependencyName] === undefined) {
        const dependencyConstructor = this.dependencyMap[dependencyName];
        const dependency = dependencyConstructor(this);
        if (dependency) {
            this.dependencyCache[dependencyName] = dependency;
        }
    }
    return this.dependencyCache[dependencyName];
};

DependencyGraph.ServiceLocator.prototype.clear = function () 
{
    this.dependencyCache = {};
    this.dependencyMap = {};
};

module.exports = new DependencyGraph.ServiceLocator


