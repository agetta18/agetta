export default {
    namespaced: true,
    state: {
        categories: []
    },
    mutations: {
        SET_CATEGORIES(state, categories) {
            state.categories = categories;
        },
        ADD_CATEGORY(state, newCategory) {
            state.categories.push(newCategory);
        },
        ADD_SKILL(state, newSkill) {
            state.categories = state.categories.map(category => {
                if (category.id === newSkill.category) {
                    category.skills.push(newSkill)
                }
                return category;
            });
        },
        REMOVE_SKILL(state, skillToRemove) {
            const removeSkillInCategory = category => {
                category.skills = category.skills.filter(
                    (skill) => skill.id != skillToRemove.id
                );
            };

            const findCategory = category => {
                if (category.id === skillToRemove.category) {
                   removeSkillInCategory(category);
                }
                return category;
            };

            state.categories = state.categories.map(findCategory);
        },
        EDIT_SKILL(state, skillToEdit) {
            const editSkillInCategory = category => {
                category.skills = category.skills.map(
                    (skill) => skill.id === skillToEdit.id ? skillToEdit : skill
                );
            };

            const findCategory = category => {
                if (category.id === skillToEdit.category) {
                   editSkillInCategory(category);
                }
                return category;
            };

            state.categories = state.categories.map(findCategory);
        },
        REMOVE_CATEGORY(state, category) {
            state.categories = state.categories.filter(cat => cat.id !== category.id).reverse()
        }
    },
    actions: {
        async addCategory({commit}, title) {
            try {
                const {data} = await this.$axios.post('/categories', {title});
                commit("ADD_CATEGORY", data);
            } catch (error) {
                throw new Error(
                    error.response.data.error || error.response.data.message 
                );
            }
        },
        async fetchCategories({commit}) {
            try {
                const {data} = await this.$axios.get('/categories/338');
                commit("SET_CATEGORIES", data);
            } catch (error) {
                console.log(error);
            }
        },
        async deleteCategory({commit}, category) {
            try {
                if(category.id >= 0)
                {
                  const { data } = await this.$axios.delete(`/categories/${category.id}`);
                }
                
                commit("DELETE_CATEGORY", category);
                
              } catch (error) {
                throw new Error(
                  error.response.data.error || error.response.data.message
                );
              }
        },
       
    },
};