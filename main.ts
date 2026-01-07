namespace SpriteKind {
    export const SocialMedia = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Video`, function (sprite, location) {
    story.startCutscene(function () {
        story.printCharacterText("This video is saying that Roblox has been hacked - do we believe it?", "Shocking Video")
        story.showPlayerChoices("Yes", "No")
        if (story.checkLastAnswer("Yes")) {
            mySprite.x += -16
            info.changeScoreBy(1)
        } else {
            mySprite.x += -16
            info.changeScoreBy(-1)
        }
    })
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`You`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 100)
