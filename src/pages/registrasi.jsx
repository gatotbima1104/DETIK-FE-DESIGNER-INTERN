import React from 'react'

const Register = () => {
  return (
    <div>
      <div className="mekanisme-card flex items-center justify-center">
        <div className="bg-white p-5 rounded w-1/3">
          <form className="flex-col flex formCustom">
            <input type="text" placeholder="Nama Perusahaan*" className="my-5 p-4"/>
            <input type="text" placeholder="Email*" className="my-5 p-4"/>
            <input type="text" placeholder="Nomor Telepon*" className="my-5 p-4"/>
            <input type="text" placeholder="Tentang Perusahaan (Max. 200 caracter)*" className="my-5 p-4"/>
            <div className="file flex">

            <input type="text" placeholder="Profil Perusahaan atau Deck (Opsional)" className="my-5 p-4 flex"
            />
            <Button className="my-4">
              Upload file
            </Button>
            </div>
            
            <input type="text" placeholder="Link website*" className="my-5 p-4"/>
            <Button>
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
