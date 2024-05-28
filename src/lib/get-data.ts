import festivals from '@/data/festivals.json';
import { Data, DataTypes } from '@/types';

export const getData = async (type: DataTypes) => {
	return festivals as Data;
};
