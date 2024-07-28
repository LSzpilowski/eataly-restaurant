import FilterCategory from '@/app/components/menu/filterCategory';
import FilterDetails from '@/app/components/menu/filterDetails';

function MenuPage() {
  return (
    <div className='w-full flex flex-col  custom-min-height '>
      <FilterCategory />
      <FilterDetails />

    </div>
  );
}

export default MenuPage;
