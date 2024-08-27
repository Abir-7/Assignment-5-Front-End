import { Controller, useFormContext } from "react-hook-form";

interface InputProps {
  name: string;
  label: string;
  errorMsg?: string;
}

const TextAria = ({ name, label, errorMsg }: InputProps) => {
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
              <textarea
                className="input  input-sm input-bordered"
                {...field}
                value={field.value || ""}
              />
            </div>

            {error && <p className="text-red-500">{error.message}</p>}
          </>
        )}
      />
    </div>
  );
};

export default TextAria;
