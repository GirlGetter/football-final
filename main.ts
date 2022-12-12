enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const goal = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    kickball()
})
function kickball () {
    story.startCutscene(function () {
        animation.runImageAnimation(
        player_1,
        [img`
            . . . . 2 2 2 2 2 e . . . . . . 
            . . . 2 2 2 2 d 2 2 e . . . . . 
            . . e 2 2 2 2 2 2 2 e . . . . . 
            . . e 2 2 2 2 2 2 2 e . . . . . 
            . . e 2 2 2 2 2 e f f c c . . . 
            . . e e 2 2 e f f f f b c . . . 
            . e e e f e 2 b f f f d c . . . 
            e e 2 2 d f 2 1 1 1 1 b c . . . 
            e e 2 2 d f e e c c c . . . . . 
            b 1 1 d e 2 2 e e c . . . . . . 
            . f f e 2 2 2 2 e . . . . . . . 
            . . f f d d 2 2 f f d d . . . . 
            . . f f d d e e f f d d . . . . 
            . . . f f f f . . . . . . . . . 
            . . e e e f f f . . . . . . . . 
            . . e e e e f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 2 e . . . . 
            . . . . . 2 2 2 2 d 2 2 e . . . 
            . . . . e 2 2 2 2 2 2 2 e . . . 
            . . . . e 2 2 2 2 2 2 2 e . . . 
            . . . . e 2 2 2 2 2 e f f c c . 
            . . . . e e 2 2 e f f f f b c . 
            . . . e e e f e 2 b f f f d c . 
            . . e e 2 2 d f 2 1 1 1 1 b c . 
            . . e e 2 2 d f e e c c c . . . 
            . . b 1 1 d e 2 e e c . . . . . 
            . . f f f f d d f . . . . . . . 
            f f f f f f d d . . . . . . . . 
            f f f . f f f e . . . . . . . . 
            f f . . . . e e e . . . . . . . 
            . . . . . . e e e e . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 2 e . . . . 
            . . . . . 2 2 2 2 d 2 2 e . . . 
            . . . . e 2 2 2 2 2 2 2 e . . . 
            . . . . e 2 2 2 2 2 2 2 e . . . 
            . . . . e 2 2 2 2 2 e f f c c . 
            . . . . e e 2 2 e f f f f b c . 
            . . e e e f e 2 2 b f f f d c . 
            . e e 2 2 d f e 2 1 1 1 1 b c . 
            . e e 2 2 d f e e e c c c . . . 
            . b 1 1 e e 2 2 e e c . . . . . 
            . . f d d 2 2 2 f f f d d . . . 
            e e f d d e e e . f f d d . . . 
            e e e f f f f f . . . . . . . . 
            e e . . . . f f f . . . . . . . 
            . . . . . . f f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 2 2 2 e . . . 
            . . . . . . 2 2 2 2 d 2 2 e . . 
            . . . . . e 2 2 2 2 2 2 2 e . . 
            . . . . . e 2 2 2 2 2 2 2 e . . 
            . . . . . e 2 2 2 2 2 e f f c c 
            . . . . . e e 2 2 e f f f f b c 
            . . . e e e f e 2 2 b f f f d c 
            . . e e 2 2 d f e 2 1 1 1 1 b c 
            . . e e 2 2 d f e e e c c c . . 
            . . b 1 1 d e 2 2 e e c . . . . 
            . . . f f f d d 2 2 f d d . . . 
            . . . . f f d d e e f d d . . . 
            . . . . . f f f f f . . . . . . 
            . . . . e e e f f . . . . . . . 
            . . . . e e e e f f . . . . . . 
            `],
        100,
        false
        )
        animation.runImageAnimation(
        player_2,
        [img`
            . . . . . . 8 6 6 6 6 6 . . . . 
            . . . . . 8 6 6 d 6 6 6 6 . . . 
            . . . . . 8 6 6 6 6 6 6 6 8 . . 
            . . . . . 8 6 6 6 6 6 6 6 8 . . 
            . . . c c f f 8 6 6 6 6 6 8 . . 
            . . . c b f f f f 8 6 6 8 8 . . 
            . . . c d f f f b 6 8 f 8 8 8 . 
            . . . c b 1 1 1 1 6 f d 6 6 8 8 
            . . . . . c c c 8 8 f d 6 6 8 8 
            . . . . . . c 8 8 6 6 8 d 1 1 b 
            . . . . . . . 8 6 6 6 6 8 f f . 
            . . . . d d f f 6 6 d d f f . . 
            . . . . d d f f 8 8 d d f f . . 
            . . . . . . . . . f f f f . . . 
            . . . . . . . . f f f 8 8 8 . . 
            . . . . . . . f f f 8 8 8 8 . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . 8 6 6 6 6 6 . . . . . . 
            . . . 8 6 6 d 6 6 6 6 . . . . . 
            . . . 8 6 6 6 6 6 6 6 8 . . . . 
            . . . 8 6 6 6 6 6 6 6 8 . . . . 
            . c c f f 8 6 6 6 6 6 8 . . . . 
            . c b f f f f 8 6 6 8 8 . . . . 
            . c d f f f b 6 8 f 8 8 8 . . . 
            . c b 1 1 1 1 6 f d 6 6 8 8 . . 
            . . . c c c 8 8 f d 6 6 8 8 . . 
            . . . . . c 8 8 6 8 d 1 1 b . . 
            . . . . . . . f d d f f f f . . 
            . . . . . . . . d d f f f f f f 
            . . . . . . . . 8 f f f . f f f 
            . . . . . . . 8 8 8 . . . . f f 
            . . . . . . 8 8 8 8 . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . 8 6 6 6 6 6 . . . . . . 
            . . . 8 6 6 d 6 6 6 6 . . . . . 
            . . . 8 6 6 6 6 6 6 6 8 . . . . 
            . . . 8 6 6 6 6 6 6 6 8 . . . . 
            . c c f f 8 6 6 6 6 6 8 . . . . 
            . c b f f f f 8 6 6 8 8 . . . . 
            . c d f f f b 6 6 8 f 8 8 8 . . 
            . c b 1 1 1 1 6 8 f d 6 6 8 8 . 
            . . . c c c 8 8 8 f d 6 6 8 8 . 
            . . . . . c 8 8 6 6 8 8 1 1 b . 
            . . . d d f f f 6 6 6 d d f . . 
            . . . d d f f . 8 8 8 d d f 8 8 
            . . . . . . . . f f f f f 8 8 8 
            . . . . . . . f f f . . . . 8 8 
            . . . . . . f f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . 8 6 6 6 6 6 . . . . . . . 
            . . 8 6 6 d 6 6 6 6 . . . . . . 
            . . 8 6 6 6 6 6 6 6 8 . . . . . 
            . . 8 6 6 6 6 6 6 6 8 . . . . . 
            c c f f 8 6 6 6 6 6 8 . . . . . 
            c b f f f f 8 6 6 8 8 . . . . . 
            c d f f f b 6 6 8 f 8 8 8 . . . 
            c b 1 1 1 1 6 8 f d 6 6 8 8 . . 
            . . c c c 8 8 8 f d 6 6 8 8 . . 
            . . . . c 8 8 6 6 8 d 1 1 b . . 
            . . . d d f 6 6 d d f f f . . . 
            . . . d d f 8 8 d d f f . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . f f 8 8 8 . . . . 
            . . . . . . f f 8 8 8 8 . . . . 
            `],
        200,
        false
        )
        story.spriteMoveToLocation(player_1, 73, 80, 100)
        timer.after(100, function () {
            story.spriteMoveToLocation(player_2, 75, 80, 40)
            timer.after(1, function () {
                music.thump.play()
                animation.runImageAnimation(
                player_1,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . c c c c . . . . . . . . 
                    . . . . c b d b . . . d d . . . 
                    . e e e f f f 1 c . . d d . . . 
                    e 2 2 2 f f f 1 c c . f f . . . 
                    2 2 2 2 e f f 1 c e e f f . . f 
                    2 d 2 2 2 f b 1 e e 2 2 e . f f 
                    2 2 2 2 2 e 2 2 e 2 2 2 e f f f 
                    2 2 2 2 2 2 e f f 2 2 d d f f e 
                    2 2 2 2 2 2 f d d e 2 d d f e e 
                    . 2 2 2 2 e e 2 2 d e f f f e e 
                    . . e e e e e 2 2 1 f f f . e e 
                    . . . . . . e e e 1 f . . . . . 
                    . . . . . . . e e b . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . c c c c . . . . . . . 
                    . . . . . c b d b . . . . . . . 
                    . . e e e f f f 1 c . . . . . . 
                    . e 2 2 2 f f f 1 c . . . . . . 
                    . 2 2 2 2 e f f 1 c c . . . . . 
                    . 2 d 2 2 2 f b 1 e e . . . . e 
                    . 2 2 2 2 2 e 2 2 e e f . . e e 
                    . 2 2 2 2 2 2 e f f 2 d d e e e 
                    . 2 2 2 2 2 2 f d d e d d f e e 
                    . . 2 2 2 2 e e 2 2 d f f f . . 
                    . . . e e e e e 2 2 1 f f f . . 
                    . . . . . . . e e e 1 f f . . . 
                    . . . . . . . . e e b f f f . . 
                    . . . . . . . . . . . . f f f . 
                    . . . . . . . . . . . . f f f . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . c c c c . . . . . . . 
                    . . . . . c b d b . . . . . . . 
                    . . e e e f f f 1 c . d d . . . 
                    . e 2 2 2 f f f 1 c . d d . . . 
                    . 2 2 2 2 e f f 1 c c f f . . . 
                    . 2 d 2 2 2 f b 1 e e f f . . f 
                    . 2 2 2 2 2 e 2 2 e e f . . f f 
                    . 2 2 2 2 2 2 2 e e 2 2 e f f f 
                    . 2 2 2 2 2 2 e f f 2 2 e f f f 
                    . . 2 2 2 2 e f d d e 2 e f . . 
                    . . . e e e e e 2 2 e d d f . . 
                    . . . . . . . e 2 2 1 d d f . . 
                    . . . . . . . e e e 1 f f e . . 
                    . . . . . . . . e e b . e e e . 
                    . . . . . . . . . . . . e e e . 
                    `,img`
                    . . . . . c c c c . . . . . . . 
                    . . . . . c b d b . . . . . . . 
                    . . e e e f f f 1 c . . . . . . 
                    . e 2 2 2 f f f 1 c . d d . . . 
                    . 2 2 2 2 e f f 1 c c d d . . . 
                    . 2 d 2 2 2 f b 1 e e f f . . . 
                    . 2 2 2 2 2 e 2 2 e e 2 e f . f 
                    . 2 2 2 2 2 2 2 e e 2 2 e f f f 
                    . 2 2 2 2 2 2 e f f 2 d d f f e 
                    . . 2 2 2 2 e f d d e d d f e e 
                    . . . e e e e e 2 2 d f f f e e 
                    . . . . . . . e 2 2 1 f f . e e 
                    . . . . . . . e e e 1 f . . . . 
                    . . . . . . . . e e b . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . c c c c . . . . . . . . 
                    . . . . c b d b . . . d f . . . 
                    . e e e 2 2 2 1 c . . f f . . . 
                    e 2 2 2 2 2 2 1 c c . f f . . f 
                    2 2 1 1 2 2 2 1 c e e f f . f f 
                    2 d 2 2 2 2 b 1 e e 2 2 e . f e 
                    2 2 2 2 2 2 2 2 e 2 2 2 e f f e 
                    2 2 2 2 2 2 e f f 2 2 d d f e e 
                    2 2 2 2 2 2 f d d e 2 d d f e e 
                    . 2 2 2 2 e e 2 2 d e f f e e e 
                    . . e e e e e 2 2 1 f f f . e e 
                    . . . . . . e e e 1 f . . . . . 
                    . . . . . . . e e b . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . c c c c . . . . . . . . 
                    . . . . c f f f . . . . . . . . 
                    . e e e 2 2 2 f c . . . . . . . 
                    e 2 2 1 1 2 2 2 f c . . f . . . 
                    2 2 1 1 2 2 2 2 2 e e f f . . . 
                    2 1 1 2 2 2 2 2 2 e 2 2 e . . . 
                    2 2 2 2 2 2 2 2 e 2 2 2 e f f f 
                    2 2 2 2 2 2 e f f 2 2 d d f f e 
                    2 2 2 2 2 2 f d d e 2 d d f e e 
                    . 2 2 2 2 e e 2 2 d e f f f e . 
                    . . e e e e e 2 2 1 f f f . . . 
                    . . . . . . e e e 1 f . . . . . 
                    . . . . . . . e e b . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f 2 . . . . . . . . 
                    . . . . f 2 2 2 . . . d d . . . 
                    . e e e 2 2 2 2 2 . . d d . . . 
                    e 2 2 2 2 2 2 2 2 2 . f f . . . 
                    2 2 2 2 2 2 2 2 2 e e f f . . f 
                    2 d 2 2 2 2 2 2 e e 2 2 e . f f 
                    2 2 2 2 2 2 2 2 e 2 2 2 e f f f 
                    2 2 2 2 2 2 e f f 2 2 d d f f e 
                    2 2 2 2 2 2 f d d e 2 d d f e e 
                    . 2 2 2 2 e e 2 2 d e f f f e e 
                    . . e e e e e 2 2 1 f f f . e e 
                    . . . . . . e e e 1 f . . . . . 
                    . . . . . . . e e b . . . . . . 
                    `],
                100,
                false
                )
                story.spriteMoveToLocation(player_1, 60, 85, 50)
                music.smallCrash.play()
            })
        })
        animation.runImageAnimation(
        Football,
        [img`
            . . 6 6 6 6 . . 
            . 6 d 4 4 4 6 . 
            6 1 b 1 1 4 d 6 
            c 1 b b 4 4 1 c 
            . c b b b d c . 
            . . c c c c . . 
            `,img`
            . . 6 6 6 6 . . 
            . 6 1 4 4 4 6 . 
            6 d 4 4 4 4 4 6 
            c b b 1 1 4 d c 
            . c b b 4 1 c . 
            . . c c c c . . 
            `,img`
            . . 6 6 6 6 . . 
            . 6 d 4 4 4 6 . 
            6 d 4 4 4 4 d 6 
            c 1 b 4 4 4 d c 
            . c b 1 1 4 c . 
            . . c c c c . . 
            `,img`
            . . 6 6 6 6 . . 
            . 6 d d 4 4 6 . 
            6 d 4 4 4 4 d 6 
            c b b 4 4 4 d c 
            . c b b 4 d c . 
            . . c c c c . . 
            `,img`
            . . 6 6 6 6 . . 
            . 6 d 1 1 4 6 . 
            6 d 4 4 4 4 1 6 
            c b b 4 4 4 d c 
            . c b b 4 d c . 
            . . c c c c . . 
            `,img`
            . . 6 6 6 6 . . 
            . 6 d 4 4 4 b . 
            . c b 1 1 4 4 b 
            . c b b 4 4 d b 
            . . c b b d 1 c 
            . . . c c b b . 
            `],
        100,
        true
        )
        story.spriteMoveToLocation(Football, 146, 55, 100)
        story.spriteMoveToLocation(Football, 167, 70, 100)
        timer.after(50, function () {
            goal_left.setFlag(SpriteFlag.Invisible, true)
            goal_right.setFlag(SpriteFlag.Invisible, true)
            player_1.setFlag(SpriteFlag.Invisible, true)
            player_2.setFlag(SpriteFlag.Invisible, true)
            tiles.setCurrentTilemap(tilemap`level3`)
            scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `)
            music.footstep.play()
            timer.after(500, function () {
                game.over(true)
            })
        })
    })
}
function setplayer () {
    color.setColor(2, color.rgb(216, 62, 53))
    color.setColor(7, color.rgb(101, 206, 130))
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1111111111111111111111119999999911111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1111111111111111111111111111111111111111111111119999999999999999999999999999999991111119999999999999999999999999999999999999999999999999999999999999999999999999
        1111111111111111111111111111111111111111111111119999999999999999999999999991111111111111111999999999999999999999999999911111111111111111111111111111111999999999
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111999999999999999111111111111111111111111111111111111111111111191111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        9111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        9111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        9111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        9991111111111111111111199999911111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        9999999111111111111119999999999999911111111111111111111111111111199999111111111111111111111111111111111111111111111111111111111111111111111111111111111111111119
        9999999999911111111999999999999999999911111111111111111111111119999999111111111111111111111111111111999999999999911111111111111111111111111999911111111111111119
        9999999999999999999999999999999999999999999999999999111111199999999999991111111111111111111111119999999999999999999911111111111111111199999999991111111111111119
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999991111111111111111111111111111111199999999999999999999999999999999999999999111111111111111111111111199999999999999999999999999999999999999999999999999999999
        9999991111111111111111111111111111111111999999999999999999999911111111111111111111111111111111111111111111111999999999999999999999999999999999999111111111111999
        9999991111111111111111111111111111111111111999999999999999991111111111111111111111111111111111111111111111111111199999999999999999999999999999111111111111111999
        9999991111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111199999999999999999999111111111111111111999
        9999991111111111111199999999911111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111999
        9999999999999999999999999999999999111111111111111111111111111111111111111111111111199999999999999999111111111111111111111111111111111111111111111111111111111999
        9999999999999999999999999999999999991111111111111111111111111111119999999999999999999999999999999999999991111111111111111111111111111111111111111111199999999999
        9999999999999999999999999999999999999991111111111111111111111111999999999999999999999999999999999999999999999111111111111111111111111111111111111199999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111199999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111112222222222222222222222
        2222222222211222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222221111111112222222222222
        2222222221112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222221111222222222
        2222222211222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222221112222222
        2222222212222222222222221111111111111111111111111111111111111111111111111111111111111111111222222222222222222222222222222222222222222222222222222222222212222222
        2222222122222222222211112222222222222222222222222222222222222222222222222222222222222222222111111111111111111111111111111111111111111111111112222222222221222222
        2222221222222222221122222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222221222222222221122222
        2222211222222222112222277777777777777777777777777777777777777777777777777777777777222222222222222222222222222222222222222222222222222222222222112222222222122222
        2222122222222211222227777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722222222222221122222222122222
        2222122222222112222777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722222222222222212222222212222
        2221122222211222777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777772222222211222222212222
        2221222222112227777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777222222222122222212222
        2221222221222277777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722222212222212222
        2211222211227777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777772222221222212222
        2212222112277777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722221222212222
        2212221122277777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777772221222212222
        2212221222777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777221222212222
        2212221222777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777221222212222
        2212221227777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722122221222
        2112221227777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722122221222
        2122221777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722122221222
        2122221777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777772212222122
        2122221777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777772212222122
        2122221777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777772211222122
        2122221777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777221222122
        2122221777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777721222122
        1122221777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722122122
        1122221777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722122122
        1122221777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722112122
        2122221777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722212122
        2122221777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722212122
        2122211777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722212122
        2122212777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722212122
        2122212777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722212122
        2122122777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722212122
        2122122777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722212122
        2122122777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722212122
        2122122777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722212122
        2122122777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722212122
        2122122777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722212122
        2122122777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722212122
        2122127777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722122122
        2122127777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722122122
        2122127777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722122122
        2122127777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722122122
        2122127777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722122122
        2122127777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777721222212
        2122127777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777721222212
        2122127777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777721222212
        2122127777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777721222212
        2122127777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777721222212
        2122127777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777721222212
        2122127777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777221222212
        2122127777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777221222212
        2122127777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777221222212
        2122127777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777221222212
        2122117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777221222212
        2122127777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777221222212
        2122127777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777772221222212
        2122127777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777772221222212
        2122127777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777772211222212
        2122122777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777772212222212
        1222122777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722212222212
        1222112277777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777222112222212
        1222212227777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777772221122222212
        1222212222777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722221222222212
        1122211222227777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777222211222222112
        2122221122222277777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722222122222222122
        2122222111222222777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777772222211222222222122
        2122222222112222227777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722221112222222222122
        2112222222211112222222222222222222222227777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722222111222222222222122
        2212222222222211122222222222222222222222222222222222222222222222222222222222222222221222222222222222222222222222222222222222222222222222222221222222222222221122
        2211122222222222211111111111111122111111111111111111111111111111111111111111111111111111122222221112222222222222221111111111111111111111111112222222222222211222
        2222211122222222222222222222222111122222222222222222222222222222222222222222222222222222211111112211111111111111112222222222222222222222222222222222222222212222
        2222222111122222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222211111111122222
        2222222222111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111112222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        `)
    goal_left = sprites.create(img`
        .cc.............
        cbbc............
        cbbc............
        .ccdb...........
        .bbdb...........
        ..cddb..........
        ..bbdb..........
        ...cddb.........
        ...bbdb.........
        ....cddb........
        ....bbdb........
        .....cddb.......
        .....bbdb.......
        ......cddb......
        ......bbdb......
        .......cddb.....
        .......bbdb.....
        ........cddb....
        ........bbdb....
        .........cddb...
        .........bbdb...
        ..........cddb..
        ..........bbdb..
        ...........cddb.
        ...........bbdb.
        ............cd1b
        ............c11b
        ............c11b
        .cc.........c11b
        cbbc........c11b
        cbbc........c11b
        .ccdb.......c11b
        .bbdb.......c11b
        ..cddb......c11b
        ..bbdb...cccb11b
        ...cddcccbbbb11b
        ...bbdccbcccb11b
        ....cddbcc..b11b
        ...cbbdcc...b11b
        ...cbcddb...b11b
        ..cbcbbdb...b11b
        ..cbf.cddb..b11b
        ..fbf.bbdb..b11b
        ..fcf..cddb.b11b
        ..fcf..bbdb.b11b
        ..fcf...cddbb11b
        ..fcf...bbdbb11b
        .cfcfc...cddb11b
        cbfcfbc..bbdd11b
        cdfffdc...cddd1b
        cdcfcdc...bbdd1b
        cbdddbc....cdddc
        cbbbbbc....bbddc
        cbbbbbc.....cddc
        cbbbbbc.....bbdc
        cbbbbbc......cc.
        cbbbbbc.........
        cbbbbbc.........
        cbbbbbc.........
        8bbbbb8.........
        8bbbbb8.........
        6bbbbb6.........
        .6bbb6..........
        ..666...........
        `, SpriteKind.goal)
    goal_right = sprites.create(img`
        .............cc.
        ............cbbc
        ............cbbc
        ...........bdcc.
        ...........bdbb.
        ..........bddc..
        ..........bdbb..
        .........bddc...
        .........bdbb...
        ........bddc....
        ........bdbb....
        .......bddc.....
        .......bdbb.....
        ......bddc......
        ......bdbb......
        .....bddc.......
        .....bdbb.......
        ....bddc........
        ....bdbb........
        ...bddc.........
        ...bdbb.........
        ..bddc..........
        ..bdbb..........
        .bddc...........
        .bdbb...........
        b1dc............
        b11c............
        b11c............
        b11c.........cc.
        b11c........cbbc
        b11c........cbbc
        b11c.......bdcc.
        b11c.......bdbb.
        b11c......bddc..
        b11bccc...bdbb..
        b11bbbbcccddc...
        b11bcccbccdbb...
        b11b..ccbddc....
        b11b...ccdbbc...
        b11b...bddcbc...
        b11b...bdbbcbc..
        b11b..bddc.fbc..
        b11b..bdbb.fbf..
        b11b.bddc..fcf..
        b11b.bdbb..fcf..
        b11bbddc...fcf..
        b11bbdbb...fcf..
        b11bddc...cfcfc.
        b11ddbb..cbfcfbc
        b1dddc...cdfffdc
        b1ddbb...cdcfcdc
        cdddc....cbdddbc
        cddbb....cbbbbbc
        cddc.....cbbbbbc
        cdbb.....cbbbbbc
        .cc......cbbbbbc
        .........cbbbbbc
        .........cbbbbbc
        .........cbbbbbc
        .........8bbbbb8
        .........8bbbbb8
        .........6bbbbb6
        ..........6bbb6.
        ...........666..
        `, SpriteKind.goal)
    goal_left.setPosition(20, 62)
    goal_right.setPosition(140, 62)
    Football = sprites.create(img`
        . . 6 6 6 6 . . 
        . 6 d 4 4 4 6 . 
        6 1 b 1 1 4 d 6 
        c 1 b b 4 4 1 c 
        . c b b b d c . 
        . . c c c c . . 
        `, SpriteKind.Projectile)
    Football.setPosition(78, 85)
    player_1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 2 2 2 e . . . 
        . . . . . . 2 2 2 2 d 2 2 e . . 
        . . . . . e 2 2 2 2 2 2 2 e . . 
        . . . . . e 2 2 2 2 2 2 2 e . . 
        . . . . . e 2 2 2 2 2 e f f c c 
        . . . . . e e 2 2 e f f f f b c 
        . . . e e e f e 2 2 b f f f d c 
        . . e e 2 2 d f e 2 1 1 1 1 b c 
        . . e e 2 2 d f e e e c c c . . 
        . . b 1 1 d e 2 2 e e c . . . . 
        . . . f f f d d 2 2 f d d . . . 
        . . . . f f d d e e f d d . . . 
        . . . . . f f f f f . . . . . . 
        . . . . e e e f f . . . . . . . 
        . . . . e e e e f f . . . . . . 
        `, SpriteKind.Player)
    player_2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . 8 6 6 6 6 6 . . . . . . . 
        . . 8 6 6 d 6 6 6 6 . . . . . . 
        . . 8 6 6 6 6 6 6 6 8 . . . . . 
        . . 8 6 6 6 6 6 6 6 8 . . . . . 
        c c f f 8 6 6 6 6 6 8 . . . . . 
        c b f f f f 8 6 6 8 8 . . . . . 
        c d f f f b 6 6 8 f 8 8 8 . . . 
        c b 1 1 1 1 6 8 f d 6 6 8 8 . . 
        . . c c c 8 8 8 f d 6 6 8 8 . . 
        . . . . c 8 8 6 6 8 d 1 1 b . . 
        . . . d d f 6 6 d d f f f . . . 
        . . . d d f 8 8 d d f f . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f 8 8 8 . . . . 
        . . . . . . f f 8 8 8 8 . . . . 
        `, SpriteKind.Enemy)
    player_1.setPosition(67, 83)
    player_2.setPosition(90, 83)
    scaling.scaleToPercent(player_1, 60, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    scaling.scaleToPercent(player_2, 60, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    game.showLongText("Press A to kick the ball", DialogLayout.Left)
}
let goal_right: Sprite = null
let goal_left: Sprite = null
let Football: Sprite = null
let player_2: Sprite = null
let player_1: Sprite = null
setplayer()
