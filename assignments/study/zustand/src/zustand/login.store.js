import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

persist;
createJSONStorage;

const useLoginStore = create(
  persist(
    (set, get) => ({
      isLoggedIn: false,
      logIn: () => set(() => ({ isLoggedIn: true })),
      logOut: () => set(() => ({ isLoggedIn: false })),

      // toggleIsLoggedIn: () => set((prevState) => ({ isLoggedIn: !prevState.isLoggedIn })),
      toggleIsLoggedIn: () => {
        const prevState = get();
        set({ isLoggedIn: !prevState.isLoggedIn });
      },
    }),
    {
      name: "login-store",
      storage: createJSONStorage(() => sessionStorage), // 기본은 localStorage
    }
  )
);

export default useLoginStore;
