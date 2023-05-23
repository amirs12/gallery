export type ImageModalProps = {
  description: string;
  id: number;
  isFavorite: boolean;
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  url: string;
}