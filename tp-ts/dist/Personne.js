"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Personne = /** @class */ (function () {
    function Personne(prenom, nom) {
        if (prenom === void 0) { prenom = "?"; }
        if (nom === void 0) { nom = "?"; }
        this.prenom = prenom;
        this.nom = nom;
        this._age = 0;
        //Object.defineProperty(this, '_age', {enumerable: false});
    }
    Personne.prototype.incrementerAge = function () {
        this.age++;
    };
    Object.defineProperty(Personne.prototype, "age", {
        get: function () { return this._age; },
        set: function (newAge) {
            if (newAge >= 0)
                this._age = newAge;
            else
                console.log("age negatif interdit");
        },
        enumerable: true,
        configurable: true
    });
    Personne.prototype.afficherV1 = function () {
        console.log(this.prenom + " " + this.nom + " , age=" + this.age);
    };
    Personne.prototype.afficherV2 = function () {
        console.log(JSON.stringify(this));
    };
    return Personne;
}());
exports.Personne = Personne;
//# sourceMappingURL=Personne.js.map