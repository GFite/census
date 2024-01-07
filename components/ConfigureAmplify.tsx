// components/ConfigureAmplify.tsx
"use client";

// import config from "@/amplifyconfiguration.json";
const config = require('../amplify/tsconfig.json')
import { Amplify } from "aws-amplify";

Amplify.configure(config, { ssr: true });

export default function ConfigureAmplifyClientSide() {
  return null;
}
