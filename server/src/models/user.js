const con = require('../Config/db_conn');
const queries = require("../Config/queries");
const SELECT = queries.SELECT;
const INSERT = queries.INSERT;
const UPDATE = queries.UPDATE;
const DELETE = queries.DELETE;

module.exports = {
    Register: function (username, email, password) {
        con.query(INSERT.AddUser, [username, email, password], (err, res) => {
            if (err) {
                throw err;
            }
        });
    },

    getUser:  function (type, value) {
        return new Promise((resolve, reject) => {
            con.query(SELECT[type], value, (err, res) => {
                if (err)
                    reject(err);
                else {
                    const data = JSON.parse(JSON.stringify(res));
                    if (data[0]) {
                        resolve(data[0]);
                    } else {
                        resolve(null)
                    }
                }
            });
        })
    },

    update: function (type, value){
        return new Promise ((resolve, reject) => {
            con.query(UPDATE[type], value,(err,res) => {
                if(err)
                    reject (err);
                else
                    resolve (JSON.parse(JSON.stringify(res)));
            });
        })
    },

    updateInfo: function (lastname, firstname, gender, Sexual_orientation, date_birthday, biography, id) {
        return new Promise ((resolve, reject) => {
            con.query(UPDATE.UpdateInfo, [lastname, firstname, gender, Sexual_orientation, date_birthday, biography, id], (err,res) => {
                if(err)
                    reject(err);
                else{
                    resolve(res);
                }
            });
        })
    },

    TagCreatedNbr: function (id) {
        return new Promise ((resolve, reject) => {
            con.query(SELECT.TagCreatedNbr, [id], (err,res) => {
                if(err)
                    reject(err);
                else{
                    const resArray = JSON.parse(JSON.stringify(res))
                    resolve(resArray);
                }
            });
        })
    },

    checkTags: function (tag) {
        return new Promise ((resolve, reject) => {
            con.query(SELECT.CheckTag, [tag], (err,res) => {
                if(err)
                    reject(err);
                else{
                    const resArray = JSON.parse(JSON.stringify(res))
                    resolve(resArray);
                }
            });
        })
    },

    deleteUserTag: function (id) {
        return new Promise ((resolve, reject) => {
            con.query(DELETE.DeleteUserTags, [id], (err,res) => {
                if(err)
                    reject(err);
                else{
                    resolve(res);
                }
            });
        })
    },

    getTags: function () {
        return new Promise ((resolve, reject) => {
            con.query(SELECT.GetTags,(err,res) => {
                if(err)
                    reject(err);
                else{
                    const resArray = JSON.parse(JSON.stringify(res))
                    resolve(resArray);
                }
            });
        })
    },

    getTagId : function (tag) {
        return new Promise ((resolve, reject) => {
            con.query(SELECT.GetTagId, [tag], (err,res) => {
                if(err)
                    reject(err);
                else{
                    const resArray = JSON.parse(JSON.stringify(res))
                    resolve(resArray);
                }
            });
        })
    },

    insertUserTag: function (id, tag) {
        return new Promise ((resolve, reject) => {
            con.query(INSERT.InsertUserTag, [id, tag], (err,res) => {
                if(err)
                    reject(err);
                else
                    resolve(res);
            });
        })
    },

    createTag: function (tag, id) {
        return new Promise ((resolve, reject) => {
            con.query(INSERT.CreateTag, [tag, id], (err,res) => {
                if(err)
                    reject(err);
                else{

                    resolve(res);
                }
            });
        })
    },

    select: function (type, value) {
        return new Promise((resolve, reject) => {
            con.query(SELECT[type], value, (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(JSON.parse(JSON.stringify(res)));
            });
        })
    },
    UpdatvfToken: function (email, token) {
        return new Promise((resolve, reject) => {
            con.query(UPDATE.UpToken, [token, email], (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(res);
            });
        })
    },
    verif: function (email) {
        return new Promise((resolve, reject) => {
            con.query(UPDATE.verif, email, (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(res);
            });
        })
    },
    non_verif: function (email) {
        return new Promise((resolve, reject) => {
            con.query(UPDATE.non_verif, email, (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(res);
            });
        })
    },
    ResetPassword : function (password, token) {
        return new Promise ((resolve, reject) => {
            con.query(UPDATE.ResetPassword, [password, token],(err,res) => {
                if(err)
                    reject (err);
                else
                    resolve (res);
            });
        })
    },
};