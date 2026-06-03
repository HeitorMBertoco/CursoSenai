import Image, { type ImageProps } from "next/image";

type Props = Omit<ImageProps, "src"> & {
  src: string;
};

/** Imagens TCGdex carregadas direto no browser (sem proxy do Next). */
export default function TcgdexImage({ src, alt, ...props }: Props) {
  return <Image src={src} alt={alt} unoptimized {...props} />;
}
