module ApplicationHelper
  def active_link_to(name, path)
    link_to(name, path, class: if current_page? path then 'active' else '' end)
  end
end