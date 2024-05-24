type Messages = typeof import("../../messages/en.json");
declare interface IntlMessages extends Messages {}

interface IOption {
  label: string;
  value: any;
}

interface IMeta {
  pagination: IPagination;
}

interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface IFileFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  url: string;
}

interface IFileAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats?: {
    thumbnail: ImageFormat;
    medium?: ImageFormat;
    small?: ImageFormat;
  } | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any; // You can replace 'any' with a more specific type if needed
  createdAt: string;
  updatedAt: string;
}

interface IFileData {
  id: number;
  attributes: IFileAttributes;
}

interface IFile {
  data: IFileData | null;
}

interface IFiles {
  data: IFileData[] | null;
}
