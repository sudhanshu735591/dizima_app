import Card from "../card";
import { data } from "../data";
import Marquee from "react-fast-marquee";
function Creativity() {
  return (
    <div className="relative bg-gradient-to-r from-white to-violet-500 text-black min-h-screen pb-40">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <img
          className="w-full relative h-full object-cover"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA+AMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAABAAIGBf/EABoQAQEBAQEBAQAAAAAAAAAAAAABETFBIQL/xAAaAQEBAQADAQAAAAAAAAAAAAADAQIABQcG/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8A95JPqXmqSFccQtxbgv1xuQCllo2YqELVhZBQWapMxCoNFkQ9VCmkFCWqWQfpk0KXMTPhtZaLIrwKhSyKskVSyAKhTSJk0KSRVKhSyOhSTr3nSCFrjUgoQaLIqyaFLmK1k1lSyK1k6LVhcxUVBouYGTaFLmKs02sqWRDSypcxVmm0VTSAarWVLIbQg0WRUJm1SyJIWqWQIWlwkjolVaHXvOAzbptDRJBoVDhZELTWdUuYmbTaGoXMAq0VTZiotVFWQsgFp1m1ouYghqlzFayazVNmKi1Wi1SSChK1SyCioWrDSIKrWiSAVC1wsgqVTROOjFqrLrnm8ioVGqaRWhCqWRWs1Ua1CyBaqKpZBQlapcwWhC1YbMFotIrRZANWhSyIVaKpZBayaFLIAQpZEyaFLImbTRWuFkGiqpSyCoJScdHRUHXPN5BQaKppFWUKpJBaEGiyIGsqXMVZNCmkFCoqwuYhUKpcwCkKWQM2ms1qFkQVClkQqClkSAUsio1Bo0iCFUsiqCcJI6KhB17zeRCqhSyKsU0VeFkCVFUuYFRaFhcxCqho0gSFWFzBQgpZEEzV4XMVFVDRZEEKpZFQgpZBUhV4WQVIVSyD1IKWRVMpSSOjoqZrrnm8ioptZakNImTRVLIKgLVLIghasLmC9CqaLmAKhYbMQTNUkirNNorRcwUGhw2YKDQ0SQDTes1eFkQVClkQVClkQptZU0ioFK8JI6K0aqza655vIqNWhosiFWhS5goNFqwsgtCtCmzELVRqlkAprNqlzEzatFahcxBDVhZFotQrRcxBWi1wsi0Wqs60WRKq0apZBq1M2qWRC02s9XhZFUKlLx0drNVorrnm8gGkKWQC1UKWRC1WstFzEKazasLmK0VCqbMTNNrNqwkiFQrRcxBDVhpAqhapJEzSzqmkQqo1SyIIapZECza0WRUK0VSyKoVKTjoQk655tBRUlLGVQlLAyk0aKspLCZAqSw2WbQk0XIFSUsFFSUuRRakpYLWUlLFWUlLAElLAEmiwUJKWBJOEj//Z"
          alt=""
        />
      </div>
      <div className="relative flex flex-col ">
        <div className="mt-20 text-6xl ">
          Discover our extraordinary lineup of <br />
          <span className="font-dancing">world-class talent.</span>
        </div>
        {
          <Marquee pauseOnHover={true} className="overflow-hidden">
            <div className="flex gap-10 mt-10 text-start">
              {data.map((val) => {
                return (
                  <div className="flex border border-blue-300 shadow-xl rounded-xl w-[400px] p-5 gap-[40px] flex-shrink-0 mr-10">
                    <Card designation={val?.designation} text={val?.text} />
                  </div>
                );
              })}
            </div>
          </Marquee>
        }
        {
          <Marquee
            pauseOnHover={true}
            direction="right"
            className="overflow-hidden"
          >
            <div className="flex gap-10 mt-10 text-start">
              {data.map((val) => {
                return (
                  <div className="flex rounded-xl border border-blue-300 shadow-xl w-[400px] p-5 gap-[40px] flex-shrink-0 mr-10">
                    <Card designation={val?.designation} text={val?.text} />
                  </div>
                );
              })}
            </div>
          </Marquee>
        }
      </div>
    </div>
  );
}
export default Creativity;