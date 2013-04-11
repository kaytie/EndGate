﻿(function (window, lib) {

    QUnit.module("Event Handler Facts");

    QUnit.test("Events can be bound and triggered.", function () {
        var e = new lib.EventHandler(),
            firstTriggered = false,
            secondTriggered = false,
            first = function () {
                firstTriggered = true;
            },
            second = function () {
                secondTriggered = true;
            };

        e.Bind(first);
        e.Bind(second);
        e.Trigger();

        QUnit.ok(firstTriggered);
        QUnit.ok(secondTriggered);
    });

    QUnit.test("Events can be bound, triggered, and then unbound and not triggered.", function () {
        var e = new lib.EventHandler(),
            firstTriggered = false,
            secondTriggered = false,
            first = function () {
                firstTriggered = true;
            },
            second = function () {
                secondTriggered = true;
            };

        e.Bind(first);
        e.Bind(second);
        e.Trigger();

        QUnit.ok(firstTriggered);
        QUnit.ok(secondTriggered);

        firstTriggered = false;
        secondTriggered = false;

        e.Unbind(first);       
        e.Trigger();

        QUnit.ok(!firstTriggered);
        QUnit.ok(secondTriggered);
    });

    QUnit.test("Events can be bound with args, triggered, and then unbound and not triggered.", function () {
        var e = new lib.EventHandler(),
            resultA = 0,
            resultB = 1,
            add = function (a, b) {
                resultA += a + b;
            },
            multiply = function (a, b) {
                resultB *= a * b;
            };

        e.Bind(add);
        e.Bind(multiply);
        e.Trigger(2, 9);

        QUnit.equal(resultA, 11);
        QUnit.equal(resultB, 18);

        e.Unbind(add)        
        e.Trigger(4, 4);

        QUnit.equal(resultA, 11);
        QUnit.equal(resultB, 288);
    });

})(window, EndGate.Core.Utilities);