import { Md5 } from 'ts-md5';

export const hashMd5 = ( arg: string ): string => Md5.hashStr(arg);
