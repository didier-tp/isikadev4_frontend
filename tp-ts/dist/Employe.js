"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Personne_1 = require("./Personne");
var Employe = /** @class */ (function (_super) {
    __extends(Employe, _super);
    function Employe(numero, prenom, nom) {
        if (numero === void 0) { numero = 0; }
        if (prenom === void 0) { prenom = "?"; }
        if (nom === void 0) { nom = "?"; }
        var _this = _super.call(this, prenom, nom) || this;
        _this.numero = numero;
        _this.salaire = 0; //par defaut
        return _this;
    }
    Employe.prototype.afficherV1 = function () {
        _super.prototype.afficherV1.call(this);
        console.log("avec numero=" + this.numero + " , salaire=" + this.salaire);
    };
    return Employe;
}(Personne_1.Personne));
exports.Employe = Employe;
//# sourceMappingURL=Employe.js.map