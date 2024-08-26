import { Controller, useFormContext } from "react-hook-form";

interface InputProps {
  name: string;
  label: string;
  errorMsg?: string;
  type: string;
  setDate: (value: string) => void;
}

const InputWithState = ({
  name,
  label,
  errorMsg,
  type,
  setDate,
}: InputProps) => {
  const { control } = useFormContext();
  return (
    <div>
      <Controller
        name={name}
        control={control}
        rules={{ required: errorMsg }}
        render={({ field, fieldState: { error } }) => (
          <>
            <div className="form-control">
              <label className="label">
                <span className="label-text">{label}</span>
              </label>
              <input
                className="input  input-sm input-bordered"
                {...field}
                value={field.value || ""}
                type={type}
                onChange={(e) => {
                  field.onChange(e); // This updates the form state
                  setDate(e.target.value); // This updates the parent state
                }}
              />
            </div>

            {error && <p className="text-red-500">{error.message}</p>}
          </>
        )}
      />
    </div>
  );
};

export default InputWithState;
