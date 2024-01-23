import Layout from '@/components/Layout';
import Container from '@/components/Container';
import FormRow from '@/components/FormRow';
import FormLabel from '@/components/FormLabel';
import InputText from '@/components/InputText';
import Button from '@/components/Button';
import { useState } from 'react';



function Contact() {
  const [file, setFile] = useState<File | undefined>();
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

  function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };

    setFile(target.files[0]);

    const file = new FileReader();

    file.onload = function () {
      setPreview(file.result);
    };

    file.readAsDataURL(target.files[0]);
  }

  async function handleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (typeof file === "undefined") return;

    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "<Votre Upload Preset non signé>");
    formData.append("api_key", import.meta.env.VITE_CLOUDINARY_API_KEY);

    const results = await fetch(
      "https://api.cloudinary.com/v1_1/dyph4rcst/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());
  }



  return (
    <Layout>

      <Container>
        <h1 className="text-6xl font-black text-center text-slate-900 mb-20">
          Contact Us
        </h1>

        <form className="max-w-md border border-gray-200 rounded p-6 mx-auto" onSubmit={handleOnSubmit}>
          <FormRow className="mb-5">
            <FormLabel htmlFor="name">Name</FormLabel>
            <InputText id="name" name="name" type="text" />
          </FormRow>

          <FormRow className="mb-5">
            <FormLabel htmlFor="email">Email</FormLabel>
            <InputText id="email" name="email" type="email" />
          </FormRow>

          <FormRow className="mb-5">
            <FormLabel htmlFor="message">Message</FormLabel>
            <InputText id="message" name="message" type="text" />
          </FormRow>
          <input
            id="image"
            type="file"
            name="image"
            accept="image/*"
            onChange={handleOnChange}
          />
          <Button>Submit</Button>
          {
            preview && (
              <p>
                <img src={preview as string} alt="Aperçu du téléchargement" />
              </p>
            )}
        </form>


      </Container>
    </Layout>
  )
}

export default Contact;
