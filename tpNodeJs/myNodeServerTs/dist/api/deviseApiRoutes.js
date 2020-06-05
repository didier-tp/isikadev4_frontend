"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MemDeviseDataService_1 = require("../core/mem/MemDeviseDataService");
const MongoDeviseDataService_1 = require("../core/mongo/MongoDeviseDataService");
const MyAppConfig_1 = require("../config/MyAppConfig");
exports.deviseApiRouter = express_1.Router();
var deviseService = initDeviseService();
function initDeviseService() {
    if (MyAppConfig_1.MyAppConfig.isNoDB())
        return new MemDeviseDataService_1.MemDeviseService();
    else
        return new MongoDeviseDataService_1.MongoDeviseService();
}
// .../devise-api/public/devise/EUR ou ...
exports.deviseApiRouter.route('/devise-api/public/devise/:code')
    .get(function (req, res, next) {
    let codeDevise = req.params.code;
    deviseService.findById(codeDevise)
        .then((devise) => { res.send(devise); })
        .catch((err) => { res.status(404).send({ err: err }); });
});
// http://localhost:8282/devise-api/public/devise renvoyant tout [ {} , {}]
// http://localhost:8282/devise-api/public/devise?changeMini=1.1 renvoyant [{}] selon critere
exports.deviseApiRouter.route('/devise-api/public/devise')
    .get(function (req, res, next) {
    let changeMini = Number(req.query.changeMini);
    deviseService.findAll()
        .then((deviseArray) => { res.send(deviseArray); })
        .catch((err) => { res.status(404).send({ err: err }); });
});
// .../devise-api/public/convert?source=EUR&target=USD&amount=100 renvoyant { ... } 
exports.deviseApiRouter.route('/devise-api/public/convert')
    .get(async function (req, res, next) {
    const codeSrc = req.query.source;
    const codeTarget = req.query.target;
    const amount = Number(req.query.amount);
    let deviseSrc = null;
    deviseService.findById(codeSrc)
        .then((deviseSource) => {
        deviseSrc = deviseSource;
        return deviseService.findById(codeTarget);
    })
        .then((deviseTarget) => {
        res.send({ source: codeSrc,
            target: codeTarget,
            amount: amount,
            result: amount * deviseTarget.change / deviseSrc.change
        });
    })
        .catch((err) => { res.status(500).send({ err: err }); });
});
//POST ... with body { "code": "M1" , "nom" : "monnaie1" , "change" : 1.123 }
exports.deviseApiRouter.route('/devise-api/private/role-admin/devise')
    .post(function (req, res, next) {
    let devise = req.body; //as javascript object via jsonParser
    deviseService.insert(devise)
        .then((savedDevise) => { res.send(savedDevise); })
        .catch((err) => { res.status(500).send({ err: err }); });
});
//PUT ... with body { "code": "USD" , "nom" : "dollar" , "change" : 1.1 }
exports.deviseApiRouter.route('/devise-api/private/role-admin/devise')
    .put(function (req, res, next) {
    let devise = req.body; //as javascript object
    deviseService.update(devise)
        .then((updatedDevise) => { res.send(updatedDevise); })
        .catch((err) => { res.status(500).send({ err: err }); });
});
// DELETE http://localhost:8282/devise-api/private/role_admin/devise/EUR
exports.deviseApiRouter.route('/devise-api/private/role-admin/devise/:code')
    .delete(function (req, res, next) {
    let codeDevise = req.params.code;
    deviseService.deleteById(codeDevise)
        .then(() => {
        res.send({ "action": "devise with code=" + codeDevise + " was deleted" });
    })
        .catch((err) => { res.status(500).send({ err: err }); });
});
