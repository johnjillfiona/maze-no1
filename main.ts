scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function on_overlap_tile(sprite: Sprite, location: tiles.Location) {
    game.over(true)
})
let mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . 4 4 4 4 4 4 4 4 . . . . 
            . . . . 4 6 6 6 6 6 6 4 . . . . 
            . . . . 4 6 c 6 6 c 6 4 . . . . 
            . . . . 6 6 6 6 6 6 6 6 . . . . 
            . . . . 6 c 6 6 6 6 c 6 . . . . 
            . . . . 6 c c c c c c 6 . . . . 
            . . . . 6 6 6 6 6 6 6 6 . . . . 
            . . . . . 6 . . . . 6 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`
    level1
`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairSouth)
scene.cameraFollowSprite(mySprite)
info.startCountdown(10)
