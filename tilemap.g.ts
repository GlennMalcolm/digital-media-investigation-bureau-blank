// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile15 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile17 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile18 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile19 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020000000000000200000000000000020200000000020002000000020000000202000000000200020002000200020002020000000002020200020000000200020200020202020000000200000002000202000000000000000002000200020002020000020202020000020202000200020200000002000000000200020002000202000202020002020202000000020002020000000000020000000000000200020200000202020002020202020002000202000000000002000000000000020002020002020202020202020202020000020200020000000000000000000000000102020202020202020202020202020202`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
2 . . . . . . 2 . . . . . . . 2 
. . . . . 2 . 2 . . . 2 . . . 2 
2 . . . . 2 . 2 . 2 . 2 . 2 . 2 
2 . . . . 2 . 2 . 2 . . . 2 . 2 
2 . 2 2 2 2 . . . 2 . . . 2 . 2 
2 . . . . . . . . 2 . 2 . 2 . 2 
2 . . 2 2 2 2 . . 2 2 2 . 2 . 2 
2 . . . 2 . . . . 2 . 2 . 2 . 2 
2 . 2 2 2 . 2 2 2 2 . . . 2 . 2 
2 . . . . . 2 . . . . . . 2 . 2 
2 . . 2 2 2 . 2 2 2 2 2 . 2 . 2 
2 . . . . . 2 . . . . . . 2 . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 . . . 
2 . 2 . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile16], TileScale.Sixteen);
            case "levelblank":
            case "level2":return tiles.createTilemap(hex`1000100001010101010101010101010101010000010000000000000100000000000000010000000000010001000000010000000101000000000101010001000100010001010000000001000100010000000100010100010101010000000100000001000101000000000000000001000100010001010000010101010000010101000100010100000001000000000100010001000101000101010001010101000000010001010000000000010000000000000100010100000101010001010101010001000101000000000001000000000000010001010001010101010101010101010000000100010000000000000000000000000001010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
2 . . . . . . 2 . . . . . . . 2 
. . . . . 2 . 2 . . . 2 . . . 2 
2 . . . . 2 2 2 . 2 . 2 . 2 . 2 
2 . . . . 2 . 2 . 2 . . . 2 . 2 
2 . 2 2 2 2 . . . 2 . . . 2 . 2 
2 . . . . . . . . 2 . 2 . 2 . 2 
2 . . 2 2 2 2 . . 2 2 2 . 2 . 2 
2 . . . 2 . . . . 2 . 2 . 2 . 2 
2 . 2 2 2 . 2 2 2 2 . . . 2 . 2 
2 . . . . . 2 . . . . . . 2 . 2 
2 . . 2 2 2 . 2 2 2 2 2 . 2 . 2 
2 . . . . . 2 . . . . . . 2 . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 . . . 
2 . 2 . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
`, [myTiles.transparency16,myTiles.tile12,myTiles.tile19], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "wall":
            case "tile12":return tile12;
            case "stage":
            case "tile11":return tile11;
            case "exit":
            case "tile1":return tile1;
            case "instrument0":
            case "tile8":return tile8;
            case "stack":
            case "tile13":return tile13;
            case "Tweet":
            case "tile3":return tile3;
            case "OnlinePost":
            case "tile9":return tile9;
            case "Emails":
            case "tile2":return tile2;
            case "GroupChat":
            case "tile14":return tile14;
            case "DM":
            case "tile4":return tile4;
            case "News":
            case "tile15":return tile15;
            case "Video":
            case "tile10":return tile10;
            case "wall0":
            case "tile16":return tile16;
            case "AI":
            case "tile17":return tile17;
            case "Phone":
            case "tile18":return tile18;
            case "Tablet":
            case "tile19":return tile19;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
