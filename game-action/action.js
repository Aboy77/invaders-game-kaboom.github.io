let count = 0;
const k = kaboom({ global: true, fullscreen: true, clearColor: [0, 0, .5, .5] });
k.scene('Level 1', () => {
    let countBase = 0;
    let move = 200;
    addLevel([
        '!* * * * * * *                                 &',
        '!                                              &',
        '!* * * * * * *                                 &',
        '!                                              &',
        '!                                              &',
        '!                                              &',
        '!                                              &',
        '!                                              &',
        '!                                              &',
        '!                                              &',
        '!                                              &',
        '!                                              &',
        '!                                              &',
        '!                                              &',
        '!                                              &',
        '!                                              &',
        '!   $   $   $   $   $   $   $   $   $   $   $  &',
    ], {
        width: 40,
        height: 40,
        '*': [sprite("alien-invader"), scale(3), "alien-invader"],
        '!': [sprite("wall"), "left-wall"],
        '&': [sprite("wall"), "right-wall"],
        '$': [sprite("base"), "main-base"]
    });
    const ship = add([sprite("ship"), scale(3), pos(width() / 2, 800)]);
    keyDown('left', () => { ship.move(-1000, 0) });
    keyDown('right', () => { ship.move(1000, 0) });

    function spaceBullet(p) {
        add([rect(6, 18), pos(p), origin('center', color(1, 0.5, 1)), 'bullet'])
    }
    keyPress('space', () => {
        spaceBullet(ship.pos.add(80, -5))
    });
    action('bullet', (p) => {
        p.move(0, -1000)
        if (p.pos.y < 0) {
            destroy(p)
        }
    })
    action("alien-invader", (a) => {
        a.move(move, 0);
    });
    collides("alien-invader", "right-wall", () => {
        move = -200, every("alien-invader", (a) => {
            a.move(0, 300)
        })
    })
    collides("alien-invader", "left-wall", () => {
        move = 200, every("alien-invader", (a) => {
            a.move(0, 300)
        })
    });
    collides("alien-invader", "bullet", (a, b) => {
        destroy(a)
        destroy(b)
        camShake(5)
        count += 1
        if (count == 14) {
            go('Level 2');
            count = 0;
        }
    });
    collides("main-base", "bullet", (a, b) => {
        destroy(a)
        destroy(b)
        camShake(5)
        countBase += 1
        if (countBase == 11) {
            go('lose', "you lose!");
            countBase = 0;
        }
    });
    collides("alien-invader", "main-base", () => {
        go('lose', "you lose!")
    })
});
k.scene('Level 2', () => {
    let countBase = 0;
    let move = 400;
    addLevel([
        '!* * * * * * *                                 &',
        '!                                              &',
        '!* * * * * * *                                 &',
        '!                                              &',
        '!                                              &',
        '!                                              &',
        '!                                              &',
        '!                                              &',
        '!                                              &',
        '!                                              &',
        '!                                              &',
        '!                                              &',
        '!                                              &',
        '!                                              &',
        '!                                              &',
        '!                                              &',
        '!   $   $   $   $   $   $   $   $   $   $   $  &',
    ], {
        width: 40,
        height: 40,
        '*': [sprite("alien-invader"), scale(3), "alien-invader"],
        '!': [sprite("wall"), "left-wall"],
        '&': [sprite("wall"), "right-wall"],
        '$': [sprite("base"), "main-base"]
    });
    const ship = add([sprite("ship"), scale(3), pos(width() / 2, 800)]);
    keyDown('left', () => { ship.move(-1000, 0) });
    keyDown('right', () => { ship.move(1000, 0) });

    function spaceBullet(p) {
        add([rect(6, 18), pos(p), origin('center', color(1, 0.5, 1)), 'bullet'])
    }
    keyPress('space', () => {
        spaceBullet(ship.pos.add(80, -5))
    });
    action('bullet', (p) => {
        p.move(0, -1000)
        if (p.pos.y < 0) {
            destroy(p)
        }
    })
    action("alien-invader", (a) => {
        a.move(move, 0);
    });
    collides("alien-invader", "right-wall", () => {
        move = -400, every("alien-invader", (a) => {
            a.move(0, 300)
        })
    })
    collides("alien-invader", "left-wall", () => {
        move = 400, every("alien-invader", (a) => {
            a.move(0, 300)
        })
    });
    collides("alien-invader", "bullet", (a, b) => {
        destroy(a);
        destroy(b);
        camShake(5);
        count += 1;
        if (count == 14) {
            go('Final');
            count = 0;
        }
    });
    collides("main-base", "bullet", (a, b) => {
        destroy(a)
        destroy(b)
        camShake(5)
        countBase += 1
        if (countBase == 11) {
            go('lose', "you lose!");
            countBase = 0;
        }
    });
    collides("alien-invader", "main-base", () => {
        go('lose', "you lose!")
    })
});
k.scene('Final', () => {
    let countBase = 0;
    let move = 600;
    addLevel([
        '!* * * * * * *                                 &',
        '!                                              &',
        '!* * * * * * *                                 &',
        '!                                              &',
        '!                                              &',
        '!                                              &',
        '!                                              &',
        '!                                              &',
        '!                                              &',
        '!                                              &',
        '!                                              &',
        '!                                              &',
        '!                                              &',
        '!                                              &',
        '!                                              &',
        '!                                              &',
        '!   $   $   $   $   $   $   $   $   $   $   $  &',
    ], {
        width: 40,
        height: 40,
        '*': [sprite("alien-invader"), scale(3), "alien-invader"],
        '!': [sprite("wall"), "left-wall"],
        '&': [sprite("wall"), "right-wall"],
        '$': [sprite("base"), "main-base"]
    });
    const ship = add([sprite("ship"), scale(3), pos(width() / 2, 800)]);
    keyDown('left', () => { ship.move(-1000, 0) });
    keyDown('right', () => { ship.move(1000, 0) });

    function spaceBullet(p) {
        add([rect(6, 18), pos(p), origin('center', color(1, 0.5, 1)), 'bullet'])
    }
    keyPress('space', () => {
        spaceBullet(ship.pos.add(80, -5))
    });
    action('bullet', (p) => {
        p.move(0, -1000)
        if (p.pos.y < 0) {
            destroy(p)
        }
    })
    action("alien-invader", (a) => {
        a.move(move, 0);
    });
    collides("alien-invader", "right-wall", () => {
        move = -600, every("alien-invader", (a) => {
            a.move(0, 300)
        })
    })
    collides("alien-invader", "left-wall", () => {
        move = 600, every("alien-invader", (a) => {
            a.move(0, 300)
        })
    });
    collides("alien-invader", "bullet", (a, b) => {
        destroy(a);
        destroy(b);
        camShake(5);
        count += 1;
        if (count == 14) {
            go('win', "you win!");
            count = 0;
        }
    });
    collides("main-base", "bullet", (a, b) => {
        destroy(a)
        destroy(b)
        camShake(5)
        countBase += 1
        if (countBase == 11) {
            go('lose', "you lose!");
            countBase = 0;
        }
    });
    collides("alien-invader", "main-base", () => {
        go('lose', "you lose!")
    })
});
scene('win', (texto) => {
    add([
        text(texto),
        scale(8),
        pos(width() / 2, height() / 2),
        origin('center')
    ])
    keyPress("space", () => {
        go('Level 1')
        count = 0;
    })
});
scene('lose', (texto) => {
    add([
        text(texto),
        scale(8),
        pos(width() / 2, height() / 2),
        origin('center')
    ])
    keyPress("space", () => {
        go('Level 1')
        count = 0;
    })
})
k.start('Level 1');
k.loadSprite("ship", "/canvas/ship.gif");
k.loadSprite("alien-invader", "/canvas/alien.gif")
k.loadSprite("wall", "/canvas/wall.png")
k.loadSprite("base", "/canvas/base.png")