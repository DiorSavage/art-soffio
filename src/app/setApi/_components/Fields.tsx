import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import styles from '../setApi.module.scss';
import { IProducts } from '@/types/products.type';

export const Field = ({ typeField, value, newProduct, setNewProduct, title }: { title?: string, typeField: string, value: string, newProduct: IProducts, setNewProduct: Dispatch<SetStateAction<IProducts>> } ) => {

  const handleAddProduct = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement
    if (typeField === 'desc') {
      title === 'heading' ? setNewProduct({ ...newProduct, description: { ...newProduct.description, [title as keyof object]: input.value } }) :
      setNewProduct({ ...newProduct, description: { ...newProduct.description, [title as keyof object]: [ ...newProduct.description.fullInfo, input.value ] } })
    } else {
      setNewProduct({ ...newProduct, [value as keyof object]: input.value })
    }
    console.log(newProduct, input.value)
  }

  return(
    <div className={styles.one__field}>
      <span>{`${value}: `} </span>
      <input type="text" onChange={(e) => handleAddProduct(e)} />
    </div>
  );
};
