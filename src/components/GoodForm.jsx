import { useForm } from 'react-hook-form';
// email hook
import validator from 'validator';
// styled components
import { AppContainer, FormGroup, CheckboxGroup } from './GoodForm.style';


const GoodForm = () => {

    const { register, handleSubmit, formState: {errors}, watch } = useForm();

    const onSubmit = (data) =>  {
        alert(JSON.stringify(data))
       
    };
    const watchPassword = watch('password')

  return (
    <AppContainer>

    <FormGroup>
      <label>Nome:</label>
      <input
      className={errors?.email && 'input-error'}
      type="text" 
      placeholder='Seu nome' 
      {...register('name', {required: true})}
      />

      {errors?.name?.type === 'required' && <p className='error-message'>Name is required.</p> }

    </FormGroup>

    <FormGroup>
      <label>Email:</label>
      <input className={errors?.email && 'input-error'} 
      type="Email" 
      placeholder='Seu e-mail' 
      {...register('email', {
        required: true, 
        validate: (value) => validator.isEmail(value),
    })}
      />
      {errors?.email?.type === 'required' && <p className='error-message'>e-mail is required.</p> } 
      {errors?.email?.type === 'validate' && <p className='error-message'>e-mail is invalid</p> } 
    </FormGroup>

    <FormGroup>
      <label>Senha:</label>
      <input 
      className={errors?.password && 'input-error'}
      type="password" 
      placeholder='Sua senha' 
      {...register('password', {minLength: 6, required: true})}
      />
      {errors?.password?.type === 'minLength' && <p className='error-message'>Password must at least 6 characters.</p> }
      {errors?.password?.type === 'required' && <p className='error-message'>Password is required.</p> } 
    </FormGroup>

    {/* confirmação de senha */}
    <FormGroup>
      <label>Confirmação de senha:</label>
      <input 
      className={errors?.passwordConfirmation && 'input-error'}
      type="password" 
      placeholder='Digite sua senha novamente' 
      {...register('passwordConfirmation', {minLength: 6, required: true, validate: (value)=> value === watchPassword,})}
      />
      {errors?.passwordConfirmation?.type === 'required' && <p className='error-message'>Password confirmation is required.</p> } 
      {errors?.passwordConfirmation?.type === 'validate' && <p className='error-message'>Passwords does not match.</p> } 
      {errors?.password?.type === 'minLength' && <p className='error-message'>Password confirmation must at least 6 characters.</p> }
    </FormGroup>

    <FormGroup>
      <label>Profissão:</label>
      <select {...register('profession', {validate: (value) => {
        return value !== '0';
      },
      })}
      className={errors?.profession && 'input-error'}
      >
        <option value="0">Selecione sua profissão</option>
        <option value="developer">Desenvolvedor</option>
        <option value="other">Outra</option>
      </select>
      {errors?.profession?.type === 'validate' && (
        <p className='error-message'> Profession is required. </p>
      )}
    </FormGroup>

    
    <CheckboxGroup>
        <input 
        type="checkbox" 
        name='privacy-policy' 
        {...register('privacyTerms', { required: true } )}
        />
        <label>I agree with the privacy terms.</label>
      {errors?.privacyTerms?.type === 'required' && (
        <p className='error-message'>You must to agree with the privacy terms.</p>
        )}
    </CheckboxGroup>
    

    <FormGroup>
      <button onClick={() => handleSubmit(onSubmit)()}>Criar conta</button>
    </FormGroup>

  </AppContainer>
  )
}

export default GoodForm