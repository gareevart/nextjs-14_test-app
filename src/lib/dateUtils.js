// Функция для форматирования даты
export const formatDate = (dateString) => {
	const options = { day: 'numeric', month: 'long', year: 'numeric' };
	return new Date(dateString).toLocaleDateString('ru-RU', options); // Форматирование даты на русском
};