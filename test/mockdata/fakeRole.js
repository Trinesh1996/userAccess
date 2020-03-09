module.exports = function fakeRoleEntity (entityOveride) {

    const role = {
        "role": ["akjshd"]
    }

    return {
        ...role,
        ...entityOveride
    }
}
