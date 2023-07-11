import CategoryCard from '@/components/CategoryCard/CategoryCard';
import getProduct from '@/utils/getProduct';

async function Categories({ params }: { params: { slug: string } }) {
  try {
    const categoryList: string[] = await getProduct({ categories: true });
    console.log('params', params);
    const categoryAndImage = await Promise.all(
      categoryList.map(async (label) => {
        try {
          const res = await getProduct({ category: label, limit: 1 });

          return { label, img: res[0].image };
        } catch (err) {
          throw new Error(err as string);
        }
      })
    );

    return (
      <main className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categoryAndImage.map((item) => (
          <CategoryCard img={item.img} label={item.label} key={item.label} />
        ))}
      </main>
    );
  } catch (err) {
    return new Error(err as string);
  }
}

export default Categories;
