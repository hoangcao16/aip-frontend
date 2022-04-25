import { Button, Input } from 'antd';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Container, FormItem } from './styled';
import PhoneInput from 'react-phone-number-input';

const ChangePassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Container>
      <div className="info">
        <h2>Change Password</h2>
        <form>
          <FormItem>
            <Controller
              rules={{
                required: true,
              }}
              name="currentPassword"
              control={control}
              render={({ field }) => (
                <>
                  <div className="formitem-label">
                    <label htmlFor="currentPassword">Current password</label>
                  </div>
                  <Input.Password
                    {...field}
                    className={
                      errors?.password
                        ? 'formitem-input error'
                        : 'formitem-input'
                    }
                    type="password"
                    id="currentPassword"
                    placeholder="Current password"
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
              name="newPassword"
              control={control}
              render={({ field }) => (
                <>
                  <div className="formitem-label">
                    <label htmlFor="newPassword">New password</label>
                  </div>
                  <Input.Password
                    {...field}
                    className={
                      errors?.password
                        ? 'formitem-input error'
                        : 'formitem-input'
                    }
                    type="password"
                    id="newPassword"
                    placeholder="New password"
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
              name="rePassword"
              control={control}
              render={({ field }) => (
                <>
                  <div className="formitem-label">
                    <label htmlFor="rePassword">Re-enter password</label>
                  </div>
                  <Input.Password
                    {...field}
                    className={
                      errors?.password
                        ? 'formitem-input error'
                        : 'formitem-input'
                    }
                    type="password"
                    id="rePassword"
                    placeholder="Re-enter password"
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

export default ChangePassword;
