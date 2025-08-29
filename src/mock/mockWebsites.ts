interface Website {
  id: string;
  name: string;
  url: string;
  status: "active" | "inactive" | "building";
  created_at: string;
  template: string;
}

const mockWebsites: Website[] = [
  {
    id: "1",
    name: "포트폴리오 웹사이트",
    url: "https://portfolio.example.com",
    status: "active",
    created_at: "2024-01-15",
    template: "Portfolio",
  },
  {
    id: "2",
    name: "회사 소개 페이지",
    url: "https://company.example.com",
    status: "active",
    created_at: "2024-01-10",
    template: "Corporate",
  },
  {
    id: "3",
    name: "이벤트 페이지",
    url: "https://event.example.com",
    status: "building",
    created_at: "2024-01-05",
    template: "Event",
  },
];

export default mockWebsites;
