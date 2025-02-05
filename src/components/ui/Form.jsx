// import { useState } from "react";
// import { FormProvider, useForm } from "react-hook-form";
// import TextInput from "./TextInput";

// export const Form = () => {
//   const methods = useForm();
//   const [success, setSuccess] = useState(false);

//   const onSubmit = methods.handleSubmit((data) => {
//     console.log(data);
//     methods.reset();
//     setSuccess(true);
//   });

//   return (
//     <FormProvider {...methods}>
//       <form
//         onSubmit={(e) => e.preventDefault()}
//         noValidate
//         autoComplete="off"
//         className="container"
//       >
//         <div className="mb3">
//             <TextInput />
//         </div>
//       </form>
//     </FormProvider>
//   );
// };
