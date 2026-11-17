import astronaut from "../../assets/astronauta.webp";
import truck from "../../assets/caminhao.webp";
import car from "../../assets/carro.webp";
import rabbit from "../../assets/coelho.webp";
import dino from "../../assets/dinossauro.webp";
import cat from "../../assets/gato.webp";
import fish from "../../assets/peixe.webp";
import unicorn from "../../assets/unicornio.webp";

const art: Record<string, string> = { dino, astronaut, truck, car, unicorn, cat, fish, rabbit };

export function artFor(theme: string): string | undefined {
  return art[theme];
}
