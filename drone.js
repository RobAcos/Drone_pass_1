var arDrone = require("ar-drone");
var client = arDrone.createClient();

client.takeoff();

client
  .after(10000, function () {
    this.clockwise(0.5);
  })
  .after(4000, function () {
    this.stop();
    this.land();
  });

client.left(speed);

client.right(speed);

client.front(speed);

client.back(speed);

[
  "blinkGreenRed",
  "blinkGreen",
  "blinkRed",
  "blinkOrange",
  "snakeGreenRed",
  "fire",
  "standard",
  "red",
  "green",
  "redSnake",
  "blank",
  "rightMissile",
  "leftMissile",
  "doubleMissile",
  "frontLeftGreenOthersRed",
  "frontRightGreenOthersRed",
  "rearRightGreenOthersRed",
  "rearLeftGreenOthersRed",
  "leftGreenRightRed",
  "leftRedRightGreen",
  "blinkStandard",
];

[
  "phiM30Deg",
  "phi30Deg",
  "thetaM30Deg",
  "theta30Deg",
  "theta20degYaw200deg",
  "theta20degYawM200deg",
  "turnaround",
  "turnaroundGodown",
  "yawShake",
  "yawDance",
  "phiDance",
  "thetaDance",
  "vzDance",
  "wave",
  "phiThetaMixed",
  "doublePhiThetaMixed",
  "flipAhead",
  "flipBehind",
  "flipLeft",
  "flipRight",
];
