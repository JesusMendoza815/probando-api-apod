import { useForm } from 'react-hook-form'
import '../styles/Form.scss'
export default function Form({setDate, date}) {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = () => {
    setDate(getValues('birthdate'))
    reset({ birthdate: '' })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='p-5 rounded-md border-2 border-sky-600 mt-5'>
      <div className='flex flex-col'>
        <label htmlFor='birthdate' className='text-xl'>
          Select your BirthDate
        </label>
        <input
          type='date'
          name='birthdate'
          id='flex-col'
          className='text-black rounded mt-3'
          {...register('birthdate', { required: true })}
        />
        {errors?.birthdate && <small className='text-[#5B8FB9]'>Please select a date</small> }
      </div>
      <button className='rounded border-2 border-sky-600 px-6 py-1 w-full mt-3 touch-pinch-zoom'>Get image</button>
      <button className='rounded border-2 border-amber-400 px-6 py-1 w-full mt-3 touch-pinch-zoom' onClick={() => setDate('')}>Image of the Day</button>
    </form>
  )
}
