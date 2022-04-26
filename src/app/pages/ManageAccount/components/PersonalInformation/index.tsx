import { Button, Input } from 'antd';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Container, FormItem } from './styled';
import PhoneInput from 'react-phone-number-input';

const PersonalInformation = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [phone, setPhone] = useState('');

  return (
    <Container>
      <div className="info">
        <h2>Personal Information</h2>
        <form>
          <FormItem>
            <Controller
              rules={{
                required: true,
              }}
              name="fullname"
              control={control}
              render={({ field }) => (
                <>
                  <div className="formitem-label">
                    <label htmlFor="fullname">Full name</label>
                  </div>
                  <Input
                    {...field}
                    allowClear
                    id="fullname"
                    placeholder="Full name"
                  />
                </>
              )}
            />
          </FormItem>
          <FormItem>
            <Controller
              rules={{
                required: true,
              }}
              name="email"
              control={control}
              render={({ field }) => (
                <>
                  <div className="formitem-label">
                    <label htmlFor="email">Email</label>
                  </div>
                  <Input
                    {...field}
                    allowClear
                    id="email"
                    placeholder="Email"
                    disabled
                  />
                </>
              )}
            />
          </FormItem>
          <FormItem>
            <Controller
              rules={{
                required: true,
              }}
              name="phone"
              control={control}
              render={({ field }) => (
                <>
                  <div className="formitem-label">
                    <label htmlFor="phone">Phone number</label>
                  </div>
                  <PhoneInput
                    defaultCountry="RU"
                    value={phone}
                    onChange={() => setPhone}
                  />
                </>
              )}
            />
          </FormItem>
          <Button htmlType="submit" className="form-button">
            Save
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default PersonalInformation;
