import { service } from './utils';

const prefix = '/wangp/api/app/dataview';

export const getSex = () => service.get(`${prefix}/wangpers/sex`);

export const getLabel = () => service.get(`${prefix}/wangpers/label`);

export const getTask = ({ startTime, endTime }) => service.get(`${prefix}/task/${startTime}/${endTime}`);

export const getOpinion = ({ startTime, endTime }) => service.get(`${prefix}/opinion/${startTime}/${endTime}`);

export const getScoreorderDept = ({ startTime, endTime }) =>
  service.get(`${prefix}/scoreorder/dept/${startTime}/${endTime}`);

export const getScoreorderUser = ({ startTime, endTime }) =>
  service.get(`${prefix}/scoreorder/user/${startTime}/${endTime}`);

export const getScoreorderRegion = ({ startTime, endTime }) =>
  service.get(`${prefix}/scoreorder/region/${startTime}/${endTime}`);

export const getRegion = ({ startTime, endTime }) => service.get(`${prefix}/wangpers/region/${startTime}/${endTime}`);

export const getTaskMonthNum = () => service.get(`${prefix}/getTaskCountByMonth`);
