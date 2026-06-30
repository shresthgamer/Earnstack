import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users, TrendingUp, Calendar, Clock, Search, RefreshCw,
  ChevronLeft, ChevronRight, Shield, BarChart3, Filter,
  ArrowUpRight, Loader2, AlertCircle, X,
} from "lucide-react";

const ADMIN_KEY = "earnstack-admin-2024";

interface Signup {
  id: number;
  name: string;
  email: string;
  source: string;
  createdAt: string;
}

interface Stats {
  total: number;
  today: number;
  thisWeek: number;
  thisMonth: number;
  bySources: { source: string; count: number }[];
}

interface AdminData {
  stats: Stats;
  signups: Signup[];
  pagination: { page: number; limit: number; total: number };
}

function StatCard({
  icon, label, value, sub, color = "#22c55e",
}: {
  icon: React.ReactNode; label: string; value: number; sub?: string; color?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
      className="bg-[#111] border border-white/8 rounded-2xl p-5 flex flex-col gap-3"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{label}</span>
        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${color}18` }}>
          <span style={{ color }}>{icon}</span>
        </div>
      </div>
      <div>
        <p className="text-3xl font-bold text-white">{value.toLocaleString()}</p>
        {sub && <p className="text-xs text-gray-600 mt-0.5">{sub}</p>}
      </div>
    </motion.div>
  );
}

function SourceBadge({ source }: { source: string }) {
  const colors: Record<string, string> = {
    hero: "#22c55e",
    navbar: "#3b82f6",
    "navbar-mobile": "#6366f1",
    pricing: "#f59e0b",
    cta: "#ec4899",
    website: "#8b5cf6",
  };
  const color = colors[source] ?? "#6b7280";
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
      style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}
    >
      {source}
    </span>
  );
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days}d ago`;
  return new Date(dateStr).toLocaleDateString();
}

export default function Admin() {
  const [data, setData] = useState<AdminData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [sourceFilter, setSourceFilter] = useState("");
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = useCallback(async (opts?: { silent?: boolean }) => {
    if (!opts?.silent) setLoading(true);
    else setRefreshing(true);
    setError(null);
    try {
      const params = new URLSearchParams({
        page: String(page),
        limit: "50",
        ...(search && { search }),
        ...(sourceFilter && { source: sourceFilter }),
      });
      const res = await fetch(`/api/admin/signups?${params}`, {
        headers: { "x-admin-key": ADMIN_KEY },
      });
      if (!res.ok) throw new Error("Unauthorized or server error");
      const json = await res.json();
      setData(json);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Failed to load data");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [page, search, sourceFilter]);

  useEffect(() => { fetchData(); }, [fetchData]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(searchInput);
    setPage(1);
  };

  const clearSearch = () => { setSearch(""); setSearchInput(""); setPage(1); };

  const totalPages = data ? Math.ceil(data.pagination.total / data.pagination.limit) : 1;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <div className="border-b border-white/8 bg-[#0e0e0e] sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#22c55e]/15 border border-[#22c55e]/20 flex items-center justify-center">
              <Shield size={16} className="text-[#22c55e]" />
            </div>
            <div>
              <h1 className="text-base font-bold text-white">EarnStack Admin</h1>
              <p className="text-xs text-gray-600">Sign-up Dashboard</p>
            </div>
          </div>
          <button
            onClick={() => fetchData({ silent: true })}
            disabled={refreshing}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white bg-white/5 hover:bg-white/8 border border-white/8 rounded-lg px-3 py-1.5 transition-all"
          >
            <RefreshCw size={13} className={refreshing ? "animate-spin" : ""} />
            Refresh
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">

        {/* Error */}
        <AnimatePresence>
          {error && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
              <AlertCircle size={16} className="text-red-400 shrink-0" />
              <p className="text-sm text-red-400">{error}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats grid */}
        {loading && !data ? (
          <div className="flex items-center justify-center py-20">
            <div className="flex flex-col items-center gap-3">
              <Loader2 size={28} className="text-[#22c55e] animate-spin" />
              <p className="text-sm text-gray-500">Loading dashboard…</p>
            </div>
          </div>
        ) : data ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard icon={<Users size={16} />} label="Total Sign-ups" value={data.stats.total} sub="All time" />
              <StatCard icon={<ArrowUpRight size={16} />} label="Today" value={data.stats.today} sub="Since midnight" color="#3b82f6" />
              <StatCard icon={<Calendar size={16} />} label="This Week" value={data.stats.thisWeek} sub="Last 7 days" color="#f59e0b" />
              <StatCard icon={<TrendingUp size={16} />} label="This Month" value={data.stats.thisMonth} sub={new Date().toLocaleString("default", { month: "long" })} color="#ec4899" />
            </div>

            {/* Sources breakdown */}
            {data.stats.bySources.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                className="bg-[#111] border border-white/8 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 size={15} className="text-[#22c55e]" />
                  <h2 className="text-sm font-semibold text-white">Sign-ups by Source</h2>
                </div>
                <div className="space-y-2.5">
                  {data.stats.bySources.map(({ source, count }) => {
                    const pct = data.stats.total > 0 ? Math.round((count / data.stats.total) * 100) : 0;
                    return (
                      <div key={source} className="flex items-center gap-3">
                        <div className="w-24 shrink-0">
                          <SourceBadge source={source} />
                        </div>
                        <div className="flex-1 bg-white/5 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${pct}%` }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="h-full bg-[#22c55e] rounded-full"
                          />
                        </div>
                        <span className="text-xs text-gray-400 w-16 text-right">{count} ({pct}%)</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Table controls */}
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
              <form onSubmit={handleSearch} className="flex items-center gap-2 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Search name or email…"
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-9 py-2.5 text-sm text-white placeholder:text-gray-600 outline-none focus:border-[#22c55e]/40 transition-colors"
                  />
                  {searchInput && (
                    <button type="button" onClick={clearSearch}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors">
                      <X size={13} />
                    </button>
                  )}
                </div>
                <button type="submit"
                  className="bg-[#22c55e] hover:bg-[#16a34a] text-black font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors">
                  Search
                </button>
              </form>

              {data.stats.bySources.length > 1 && (
                <div className="flex items-center gap-2">
                  <Filter size={13} className="text-gray-500" />
                  <select
                    value={sourceFilter}
                    onChange={(e) => { setSourceFilter(e.target.value); setPage(1); }}
                    className="bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white outline-none focus:border-[#22c55e]/40 transition-colors"
                  >
                    <option value="">All sources</option>
                    {data.stats.bySources.map(({ source }) => (
                      <option key={source} value={source}>{source}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {/* Table */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="bg-[#111] border border-white/8 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/8 bg-white/2">
                      <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-5 py-3.5">#</th>
                      <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-5 py-3.5">Name</th>
                      <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-5 py-3.5">Email</th>
                      <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-5 py-3.5">Source</th>
                      <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-5 py-3.5">Joined</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.signups.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="text-center py-12 text-gray-600">
                          {search || sourceFilter ? "No results match your filters." : "No sign-ups yet."}
                        </td>
                      </tr>
                    ) : (
                      data.signups.map((signup, i) => (
                        <motion.tr
                          key={signup.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.03 }}
                          className="border-b border-white/5 hover:bg-white/3 transition-colors"
                        >
                          <td className="px-5 py-3.5 text-xs text-gray-600">
                            {(page - 1) * 50 + i + 1}
                          </td>
                          <td className="px-5 py-3.5">
                            <div className="flex items-center gap-2.5">
                              <div className="w-7 h-7 rounded-full bg-[#22c55e]/15 border border-[#22c55e]/20 flex items-center justify-center shrink-0">
                                <span className="text-xs font-bold text-[#22c55e]">
                                  {signup.name.charAt(0).toUpperCase()}
                                </span>
                              </div>
                              <span className="text-sm font-medium text-white">{signup.name}</span>
                            </div>
                          </td>
                          <td className="px-5 py-3.5 text-sm text-gray-400 font-mono">{signup.email}</td>
                          <td className="px-5 py-3.5">
                            <SourceBadge source={signup.source} />
                          </td>
                          <td className="px-5 py-3.5">
                            <div>
                              <p className="text-xs text-gray-400">{timeAgo(signup.createdAt)}</p>
                              <p className="text-xs text-gray-600 mt-0.5">
                                {new Date(signup.createdAt).toLocaleDateString("en-US", {
                                  month: "short", day: "numeric", year: "numeric",
                                  hour: "2-digit", minute: "2-digit",
                                })}
                              </p>
                            </div>
                          </td>
                        </motion.tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-between px-5 py-3.5 border-t border-white/8">
                  <p className="text-xs text-gray-600">
                    Page {page} of {totalPages} · {data.pagination.total} total
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      disabled={page === 1}
                      className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all"
                    >
                      <ChevronLeft size={14} />
                    </button>
                    <button
                      onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                      disabled={page === totalPages}
                      className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all"
                    >
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Footer note */}
            <p className="text-xs text-gray-700 text-center flex items-center justify-center gap-1.5">
              <Clock size={11} /> Auto-refresh not enabled — click Refresh for latest data
            </p>
          </>
        ) : null}
      </div>
    </div>
  );
}
