import React from "react";
import SiteLayout from "../components/layouts/SiteLayout";
import fetch from "node-fetch";
import Image from "next/image";
import Loading from "../components/Loading";
import Link from "next/link";
import Pokemon from "../components/Pokemon";

export default function PokemonAPI() {
  return <Pokemon />;
}
