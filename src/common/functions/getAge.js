export const getAge = year => {
   if (year < 1085)
      return 'Age of Antiquity';
   else if (year < 2019)
      return 'Age of Expansion';
   else
      return 'Age of Enlightenment';
}