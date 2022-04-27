import { Button, Input, Radio } from 'antd';
import Styled from './styled';
import { useForm, Controller } from 'react-hook-form';
import { useFeedbackSlice } from './slice';
import { useDispatch } from 'react-redux';
const { TextArea } = Input;
const defaultValues = {
  type: 'request',
  title: '',
  content: '',
};
const Feedback = () => {
  const dispatch = useDispatch();
  const { actions } = useFeedbackSlice();
  const { control, handleSubmit } = useForm({ defaultValues });
  // submit form
  const onSubmit = data => {
    dispatch(actions.feedbackRequest(data));
  };
  return (
    <Styled.Feedback>
      <div className="feedback">
        <h2>Feedback</h2>
        <p>Give us feedback to improve your experience.</p>

        <form className="feedback__send" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-radio">
            <Controller
              name="type"
              control={control}
              render={({ field }) => (
                <>
                  <h3>Type</h3>
                  <Radio.Group {...field}>
                    <Radio value="request">Feature request</Radio>
                    <Radio value="error">Error report</Radio>
                    <Radio value="other">Other</Radio>
                  </Radio.Group>
                </>
              )}
            />
          </div>
          <h3>What would you like feedback?</h3>
          <div className="form-input-title">
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <>
                  <Input
                    className="input-title"
                    placeholder="Title"
                    {...field}
                  />
                </>
              )}
            />
          </div>
          <div className="form-input-message">
            <Controller
              name="content"
              control={control}
              render={({ field }) => (
                <>
                  <TextArea
                    className="input-message"
                    placeholder="Your message"
                    autoSize={{ minRows: 7, maxRows: 7 }}
                    showCount
                    maxLength={3000}
                    {...field}
                  />
                </>
              )}
            />
          </div>
          <div>
            <Button className="submit" type="primary" htmlType="submit">
              Send
            </Button>
          </div>
        </form>
      </div>
    </Styled.Feedback>
  );
};

export default Feedback;
