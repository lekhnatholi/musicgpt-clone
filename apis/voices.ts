import { Voice } from '../lib/sequelize'

export async function getVoices(page: number = 1, pageSize: number = 5) {
  const offset = (page - 1) * pageSize;
  const { rows: voices, count: total } = await Voice.findAndCountAll({
    offset,
    limit: pageSize,
  });
  return {
    voices,
    total,
    page,
    pageSize,
    totalPages: Math.ceil(total / pageSize),
  };
}
