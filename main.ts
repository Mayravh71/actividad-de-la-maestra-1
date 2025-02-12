for (let index = 0; index <= 2; index++) {
    blocks.fill(
    PLANKS_OAK,
    pos(-3, -1, -2),
    pos(3, 2, 2),
    FillOperation.Hollow
    )
    blocks.fill(
    AIR,
    pos(-3, 2, -2),
    pos(3, 2, 2),
    FillOperation.Replace
    )
    for (let index2 = 0; index2 < 4; index2++) {
        mobs.spawn(CHICKEN, pos(0, 0, 0))
    }
    player.teleport(pos(15, 0, 0))
}
