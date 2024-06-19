/**
 * Creates a new agent camera position: ~left/right, ~below/above, ~behind/in front
 * @param x the left (-x) or right (+x) coordinate, in blocks
 * @param y the below (-y) or above (+y) coordinate, in blocks
 * @param z the behind (-z) or in front (+z) coordinate, in blocks
 */
//% blockNamespace=positions
//% weight=300 blockGap=60 color=#69B090
//% blockId=minecraftCreatePositionAgentCamera block="agent right|$x|above|$y|in front|$z"
function posAgentCamera(x: number, y: number, z: number): Position {
    const agentPosition = agent.getPosition();
    const agentDirection = positions.toCompassDirection(agent.getOrientation());
    switch (agentDirection) {
        case CompassDirection.West:
            return positions.add(agentPosition, pos(-z, y, -x));
        case CompassDirection.East:
            return positions.add(agentPosition, pos(z, y, x));
        case CompassDirection.North:
            return positions.add(agentPosition, pos(x, y, -z));
        case CompassDirection.South:
            return positions.add(agentPosition, pos(-x, y, z));
        default:
            return agentPosition;
    }
}
