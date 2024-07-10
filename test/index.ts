import kaplay from "kaplay";
import { init } from "../src";

const k = kaplay({ global: true });

init(k);

import("./main.ka");
