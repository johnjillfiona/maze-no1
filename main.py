def on_overlap_tile(sprite, location):
    game.over(True)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.stair_large,
    on_overlap_tile)

mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(mySprite)
tiles.set_tilemap(tilemap("""
    level1
"""))
tiles.place_on_random_tile(mySprite, sprites.dungeon.stair_south)
scene.camera_follow_sprite(mySprite)
info.start_countdown(10)