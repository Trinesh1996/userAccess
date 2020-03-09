module.exports = function fakeUserEntity (entityOveride) {

    const user = {
        "user_name": "Trinesh"
        ,"user_surname": "Chetty"
        ,"user_email": "trinesh@gmail.com"
        ,"password": "198r19f8h19c17etfg19uf917eg9e"
        ,"phone_number_1": "+27 631 4134"
        ,"phone_number_2": "+27 213 431"
        ,"street": "19 De Wet Street, Boston, Bellville"
        ,"suburb": "northen suburbs"
        ,"city": "cape town"
        ,"postal_code": "7530"
        ,"country": "South Africa"
        ,"currency": "ZAR"
        ,"createdSource_ip": "193.3.1.4"
        ,"createdSource_browser": "Google Chrome"
        ,"createdSource_MACAddress": "12:23:421:442"
        ,"createdSource_createdBy": "admin"
        ,"createdSource_createdAt": 1231231233
        
    }

    return {
        ...user,
        ...entityOveride
    }
}
