"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface LogItem {
  nama: string;
  kelas: string;
  aktivitas: string;
  lokasi: string;
  tanggal: string;
  foto?: string;
}

interface LaporanItem {
  pelapor: string;
  lokasi: string;
  deskripsi: string;
  tanggal: string;
}

interface AgendaItem {
  judul: string;
  tanggal: string;
  lokasi: string;
  keterangan: string;
}

interface GaleriItem {
  lokasi: string;
  jenis: string;
  bentuk: string;
  waktu: string;
  foto?: string;
  video?: string;
}

const getTanggalSekarang = (): string => {
  const hariList = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const bulanList = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const now = new Date();
  return `${hariList[now.getDay()]}, ${now.getDate()} ${bulanList[now.getMonth()]} ${now.getFullYear()}`;
};

const exportToExcel = (data: any[], filename: string) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  XLSX.writeFile(workbook, `${filename}.xlsx`);
};

const exportToPDF = (columns: string[], data: any[], filename: string) => {
  const doc = new jsPDF();
  autoTable(doc, {
    head: [columns],
    body: data.map(item => columns.map(col => (item as any)[col.toLowerCase()] ?? "")),
  });
  doc.save(`${filename}.pdf`);
};

export default function GercabGo() {
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [aktivitas, setAktivitas] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [foto, setFoto] = useState<string | undefined>();
  const [video, setVideo] = useState<string | undefined>();
  const [logList, setLogList] = useState<LogItem[]>([]);
  const [pelapor, setPelapor] = useState("");
  const [laporLokasi, setLaporLokasi] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [laporanList, setLaporanList] = useState<LaporanItem[]>([]);
  const [judulAgenda, setJudulAgenda] = useState("");
  const [tanggalAgenda, setTanggalAgenda] = useState("");
  const [lokasiAgenda, setLokasiAgenda] = useState("");
  const [ketAgenda, setKetAgenda] = useState("");
  const [agendaList, setAgendaList] = useState<AgendaItem[]>([]);
  const [jenisBudaya, setJenisBudaya] = useState("");
  const [bentukBudaya, setBentukBudaya] = useState("");
  const [lokasiBudaya, setLokasiBudaya] = useState("");
  const [waktuBudaya, setWaktuBudaya] = useState("");
  const [galeriList, setGaleriList] = useState<GaleriItem[]>([]);

  useEffect(() => {
    const get = (key: string) => JSON.parse(localStorage.getItem(key) || "[]");
    setLogList(get("gercab_data"));
    setLaporanList(get("gercab_laporan"));
    setAgendaList(get("gercab_agenda"));
    setGaleriList(get("gercab_galeri"));
  }, []);

  useEffect(() => { localStorage.setItem("gercab_data", JSON.stringify(logList)); }, [logList]);
  useEffect(() => { localStorage.setItem("gercab_laporan", JSON.stringify(laporanList)); }, [laporanList]);
  useEffect(() => { localStorage.setItem("gercab_agenda", JSON.stringify(agendaList)); }, [agendaList]);
  useEffect(() => { localStorage.setItem("gercab_galeri", JSON.stringify(galeriList)); }, [galeriList]);

  const handleSubmit = (type: string) => {
    const now = getTanggalSekarang();
    if (type === "log" && nama && kelas && aktivitas && lokasi)
      setLogList([...logList, { nama, kelas, aktivitas, lokasi, tanggal: now, foto }]), setNama(""), setKelas(""), setAktivitas(""), setLokasi(""), setFoto(undefined);
    if (type === "lapor" && pelapor && laporLokasi && deskripsi)
      setLaporanList([...laporanList, { pelapor, lokasi: laporLokasi, deskripsi, tanggal: now }]), setPelapor(""), setLaporLokasi(""), setDeskripsi("");
    if (type === "agenda" && judulAgenda && tanggalAgenda && lokasiAgenda && ketAgenda)
      setAgendaList([...agendaList, { judul: judulAgenda, tanggal: tanggalAgenda, lokasi: lokasiAgenda, keterangan: ketAgenda }]), setJudulAgenda(""), setTanggalAgenda(""), setLokasiAgenda(""), setKetAgenda("");
    if (type === "galeri" && lokasiBudaya && jenisBudaya && bentukBudaya && waktuBudaya)
      setGaleriList([...galeriList, { lokasi: lokasiBudaya, jenis: jenisBudaya, bentuk: bentukBudaya, waktu: waktuBudaya, foto, video }]), setLokasiBudaya(""), setJenisBudaya(""), setBentukBudaya(""), setWaktuBudaya(""), setFoto(undefined), setVideo(undefined);
  };

  const handleMedia = (e: React.ChangeEvent<HTMLInputElement>, type: "foto" | "video") => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => type === "foto" ? setFoto(reader.result as string) : setVideo(reader.result as string);
    reader.readAsDataURL(file);
  };
  const exportAll = {
    jejak: () => {
      exportToPDF(
        ["Nama", "Kelas", "Aktivitas", "Lokasi", "Tanggal"],
        logList.map(({ foto, ...d }) => d),
        "Jejak_Hijau"
      );
      exportToExcel(
        logList.map(({ foto, ...d }) => d),
        "Jejak_Hijau"
      );
    },
    lapor: () => {
      exportToPDF(
        ["Pelapor", "Lokasi", "Deskripsi", "Tanggal"],
        laporanList,
        "Laporan"
      );
      exportToExcel(
        laporanList,
        "Laporan"
      );
    },
    agenda: () => {
      exportToPDF(
        ["Judul", "Tanggal", "Lokasi", "Keterangan"],
        agendaList,
        "Agenda"
      );
      exportToExcel(
        agendaList,
        "Agenda"
      );
    },
    galeri: () => {
      exportToPDF(
        ["Lokasi", "Jenis", "Bentuk", "Waktu"],
        galeriList.map(({ foto, video, ...d }) => d),
        "Galeri"
      );
      exportToExcel(
        galeriList.map(({ foto, video, ...d }) => d),
        "Galeri"
      );
    }
  };
  

  const renderList = (items: any[], render: (item: any, idx: number) => React.ReactNode) => <div className="grid gap-2">{items.map(render)}</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 pt-8 pb-16 bg-white rounded-3xl shadow-2xl border border-green-300">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-4">
          <img src="/logo.png" alt="Logo" className="w-16 h-16" />
          <div>
            <h1 className="text-3xl font-bold text-green-700">GERCAB-GO</h1>
            <p className="text-sm text-gray-600">Gerakan Cinta Alam dan Budaya</p>
            <p className="text-sm text-gray-500">SMP Negeri 2 Kayen</p>
            <p className="text-xs mt-1 text-gray-400 italic">By: @Mr.Tri25</p>
          </div>
        </div>
      </div>
      <Tabs defaultValue="jejak">
        <TabsList className="grid grid-cols-4 gap-2 bg-green-100 p-2 rounded-xl mb-4">
          <TabsTrigger value="jejak">Jejak</TabsTrigger>
          <TabsTrigger value="lapor">Lapor</TabsTrigger>
          <TabsTrigger value="agenda">Agenda</TabsTrigger>
          <TabsTrigger value="galeri">Galeri</TabsTrigger>
        </TabsList>

        <TabsContent value="jejak" className="space-y-4">
          <Input placeholder="Nama" value={nama} onChange={e => setNama(e.target.value)} />
          <Input placeholder="Kelas" value={kelas} onChange={e => setKelas(e.target.value)} />
          <Input placeholder="Aktivitas" value={aktivitas} onChange={e => setAktivitas(e.target.value)} />
          <Input placeholder="Lokasi" value={lokasi} onChange={e => setLokasi(e.target.value)} />
          <Input type="file" accept="image/*" onChange={e => handleMedia(e, "foto")} />
          {foto && <img src={foto} alt="Preview" className="w-40 h-auto border rounded" />}
          <Button onClick={() => handleSubmit("log")} className="bg-green-600 text-white w-full">Simpan Jejak</Button>
          <Button onClick={exportAll.jejak} className="bg-yellow-500 text-white w-full">Export Excel & PDF</Button>
          {renderList(logList, (item, idx) => (
            <Card key={idx}><CardContent className="p-4"><p><strong>{item.nama}</strong> - {item.kelas}</p><p>{item.aktivitas} @ {item.lokasi}</p><p className="text-xs">{item.tanggal}</p>{item.foto && <img src={item.foto} alt="foto" className="w-32 mt-2" />}</CardContent></Card>
          ))}
        </TabsContent>

        <TabsContent value="lapor" className="space-y-4">
          <Input placeholder="Nama Pelapor" value={pelapor} onChange={e => setPelapor(e.target.value)} />
          <Input placeholder="Lokasi" value={laporLokasi} onChange={e => setLaporLokasi(e.target.value)} />
          <Input placeholder="Deskripsi" value={deskripsi} onChange={e => setDeskripsi(e.target.value)} />
          <Button onClick={() => handleSubmit("lapor")} className="bg-red-600 text-white w-full">Kirim Laporan</Button>
          <Button onClick={exportAll.lapor} className="bg-yellow-500 text-white w-full">Export Excel & PDF</Button>
          {renderList(laporanList, (item, idx) => (
            <Card key={idx}><CardContent className="p-4"><p><strong>{item.pelapor}</strong> - {item.lokasi}</p><p>{item.deskripsi}</p><p className="text-xs">{item.tanggal}</p></CardContent></Card>
          ))}
        </TabsContent>

        <TabsContent value="agenda" className="space-y-4">
          <Input placeholder="Judul Agenda" value={judulAgenda} onChange={e => setJudulAgenda(e.target.value)} />
          <Input placeholder="Tanggal" value={tanggalAgenda} onChange={e => setTanggalAgenda(e.target.value)} />
          <Input placeholder="Lokasi" value={lokasiAgenda} onChange={e => setLokasiAgenda(e.target.value)} />
          <Input placeholder="Keterangan" value={ketAgenda} onChange={e => setKetAgenda(e.target.value)} />
          <Button onClick={() => handleSubmit("agenda")} className="bg-blue-600 text-white w-full">Simpan Agenda</Button>
          <Button onClick={exportAll.agenda} className="bg-yellow-500 text-white w-full">Export Excel & PDF</Button>
          {renderList(agendaList, (item, idx) => (
            <Card key={idx}><CardContent className="p-4"><p><strong>{item.judul}</strong></p><p>{item.tanggal} - {item.lokasi}</p><p className="text-sm">{item.keterangan}</p></CardContent></Card>
          ))}
        </TabsContent>

        <TabsContent value="galeri" className="space-y-4">
          <Input placeholder="Lokasi Kegiatan" value={lokasiBudaya} onChange={e => setLokasiBudaya(e.target.value)} />
          <Input placeholder="Jenis Kegiatan" value={jenisBudaya} onChange={e => setJenisBudaya(e.target.value)} />
          <Input placeholder="Bentuk Budaya" value={bentukBudaya} onChange={e => setBentukBudaya(e.target.value)} />
          <Input placeholder="Waktu Kegiatan" value={waktuBudaya} onChange={e => setWaktuBudaya(e.target.value)} />
          <Input type="file" accept="image/*" onChange={e => handleMedia(e, "foto")} />
          <Input type="file" accept="video/*" onChange={e => handleMedia(e, "video")} />
          {foto && <img src={foto} alt="Preview Foto" className="w-40 border rounded" />}
          {video && <video controls src={video} className="w-40 border rounded" />}
          <Button onClick={() => handleSubmit("galeri")} className="bg-green-600 text-white w-full">Simpan Galeri</Button>
          <Button onClick={exportAll.galeri} className="bg-yellow-500 text-white w-full">Export Excel & PDF</Button>
          {renderList(galeriList, (item, idx) => (
            <Card key={idx}><CardContent className="p-4"><p><strong>{item.jenis}</strong> - {item.bentuk}</p><p>{item.lokasi} - {item.waktu}</p>{item.foto && <img src={item.foto} alt="Foto Budaya" className="w-32" />}{item.video && <video controls src={item.video} className="w-32" />}</CardContent></Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
