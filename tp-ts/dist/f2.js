"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var e_1, _a, e_2, _b;
var tab1 = ["javascript", "typescript", "dom"];
var tab2 = [];
try {
    for (var tab1_1 = __values(tab1), tab1_1_1 = tab1_1.next(); !tab1_1_1.done; tab1_1_1 = tab1_1.next()) {
        var val = tab1_1_1.value;
        tab2.push(val.toUpperCase());
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (tab1_1_1 && !tab1_1_1.done && (_a = tab1_1.return)) _a.call(tab1_1);
    }
    finally { if (e_1) throw e_1.error; }
}
console.log(tab2);
/*
cet exemple necessite
     "lib": ["es2015","dom"],
et   "downlevelIteration": true,
  dans tsconfig.json
*/
var m = new Map();
m.set("hiver", "froid , neige");
m.set("primptemps", "fleur , vert");
try {
    for (var _c = __values(m.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
        var _e = __read(_d.value, 2), k = _e[0], v = _e[1];
        console.log("saison " + k + " -- " + v);
    }
}
catch (e_2_1) { e_2 = { error: e_2_1 }; }
finally {
    try {
        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
    }
    finally { if (e_2) throw e_2.error; }
}
//# sourceMappingURL=f2.js.map