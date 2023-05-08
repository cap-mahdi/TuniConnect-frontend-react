import react from "react";

export default function Spin() {
    return (
        <div class="flex justify-center">
      <div class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-indigo-600 rounded-full" role="status" aria-label="loading">
  <span class="sr-only">Loading...</span>
</div>

    </div>

    )
}
