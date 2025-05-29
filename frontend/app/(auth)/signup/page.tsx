// export const metadata = {
//   title: "Sign Up - Open PRO",
//   description: "Page description",
// };

// import Link from "next/link";
// import { useState } from "react";

// const [formData, setFormData] = useState({
//   Name: "",
//   CompanyName: "",
//   WorkEmail: "",
//   Password: "",
// });

// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const { name, value } = e.target;
//   setFormData((prev) => ({
//     ...prev,
//     [name]: value,
//   }));
// };

// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   try {
//     const response = await fetch("http://localhost:2001/register", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     const data = await response.json();

//     if (response.ok) {
//       alert("Registered successfully!");
//       // Optionally reset the form or redirect
//     } else {
//       alert("Registration failed: " + data.error);
//     }
//   } catch (err) {
//     console.error("Error:", err);
//     alert("Something went wrong.");
//   }
// };


// export default function SignUp() {
//   return (
//     <section>
//       <div className="mx-auto max-w-6xl px-4 sm:px-6">
//         <div className="py-12 md:py-20">
//           {/* Section header */}
//           <div className="pb-12 text-center">
//             <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
//               Create an account
//             </h1>
//           </div>
//           {/* Contact form */}
//           <form className="mx-auto max-w-[400px]">
//             <div className="space-y-5">
//               <div>
//                 <label
//                   className="mb-1 block text-sm font-medium text-indigo-200/65"
//                   htmlFor="name"
//                 >
//                   Name <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   id="name"
//                   type="text"
//                   className="form-input w-full"
//                   placeholder="Your full name"
//                   name="Name"
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   className="mb-1 block text-sm font-medium text-indigo-200/65"
//                   htmlFor="name"
//                 >
//                   Company Name <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   id="company"
//                   name="CompanyName"
//                   type="text"
//                   className="form-input w-full"
//                   placeholder="Your company name"
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   className="mb-1 block text-sm font-medium text-indigo-200/65"
//                   htmlFor="email"
//                 >
//                   Work Email <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   id="email"
//                   name="WorkEmail"
//                   type="email"
//                   className="form-input w-full"
//                   placeholder="Your work email"
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label
//                   className="block text-sm font-medium text-indigo-200/65"
//                   htmlFor="password"
//                 >
//                   Password <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   id="password"
//                   name="Password"
//                   type="password"
//                   className="form-input w-full"
//                   onChange={handleChange}
//                   placeholder="Password (at least 10 characters)"
//                 />
//               </div>
//             </div>
//             <div className="mt-6 space-y-5">
//               <button className="btn w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]" onSubmit={handleSubmit}>
//                 Register
//               </button>
//               {/* <div className="flex items-center gap-3 text-center text-sm italic text-gray-600 before:h-px before:flex-1 before:bg-linear-to-r before:from-transparent before:via-gray-400/25 after:h-px after:flex-1 after:bg-linear-to-r after:from-transparent after:via-gray-400/25">
//                 or
//               </div>
//               <button className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]">
//                 Sign In with Google
//               </button> */}
//             </div>
//           </form>
//           {/* Bottom link */}
//           <div className="mt-6 text-center text-sm text-indigo-200/65">
//             Already have an account?{" "}
//             <Link className="font-medium text-indigo-500" href="/signin">
//               Sign in
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  return (
    <section>
      <FormContent />
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
}

function FormContent() {
  const [formData, setFormData] = useState({
    Name: "",
    CompanyName: "",
    WorkEmail: "",
    Password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("🟡 Form submit triggered");

    try {
      const response = await fetch("http://localhost:2001/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("🟢 Server response:", data);

      if (response.ok) {
        toast.success("✅ Registered successfully!");
      } else {
        toast.error("❌ Registration failed: " + data.error);
      }
    } catch (err) {
      console.error("🔴 Error submitting form:", err);
      toast.error("Something went wrong.");
    }
  };


  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="py-12 md:py-20">
        <div className="pb-12 text-center">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Create an account
          </h1>
        </div>

        <form className="mx-auto max-w-[400px]" onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-indigo-200/65">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                name="Name"
                value={formData.Name}
                className="form-input w-full"
                placeholder="Your full name"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="company" className="mb-1 block text-sm font-medium text-indigo-200/65">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                id="company"
                name="CompanyName"
                type="text"
                value={formData.CompanyName}
                className="form-input w-full"
                placeholder="Your company name"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-indigo-200/65">
                Work Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="WorkEmail"
                type="email"
                value={formData.WorkEmail}
                className="form-input w-full"
                placeholder="Your work email"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-indigo-200/65">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                name="Password"
                type="password"
                value={formData.Password}
                className="form-input w-full"
                onChange={handleChange}
                placeholder="Password (at least 10 characters)"
                required
              />
            </div>
          </div>

          <div className="mt-6 space-y-5">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              Register
            </button>


          </div>
        </form>

        <div className="mt-6 text-center text-sm text-indigo-200/65">
          Already have an account?{" "}
          <Link className="font-medium text-indigo-500" href="/signin">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
