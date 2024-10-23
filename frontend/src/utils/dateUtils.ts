export const isValidDate = (date: string | Date): boolean => {
    return !isNaN(new Date(date).getTime());
  };